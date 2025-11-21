import { useReducer, createContext, type ReactElement } from "react";

type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number,
}

type CartType = CartItemType[]

const initState: CartType = []


type actionType =
  | { type: REDUCER_ACTIONS.ADD; payload: CartItemType }
  | { type: REDUCER_ACTIONS.REMOVE; payload: { sku: string } }
  | { type: REDUCER_ACTIONS.QUANTITY; payload: { sku: string }; newQ: number }
  | { type: REDUCER_ACTIONS.SUBMIT }


export const enum REDUCER_ACTIONS  {
    ADD,
    REMOVE,
    QUANTITY,
    SUBMIT,
}

function reducer(state: CartType, action: actionType){
    switch(action.type){
        case REDUCER_ACTIONS.ADD: {
            if(action.payload == null){
                throw new Error('payload is missing!')
            }

            const { sku, name, price} = action.payload

            const filteredCart = state.filter((item: CartItemType) => item.sku !== sku)

            const itemExists: CartItemType | undefined = state.find(item => item.sku === sku)

            const qty: number = itemExists ? itemExists.qty + 1 : 1

            return [...filteredCart, {sku, name, price, qty}]
        }

        case REDUCER_ACTIONS.REMOVE: {
            if(!action.payload) throw new Error('Payload is missing!')

            const { sku } = action.payload

            const filteredCart = state.filter((item) => item.sku !== sku)

           return [...filteredCart]
                
        }
        case REDUCER_ACTIONS.QUANTITY: {
            if(!action.payload) throw new Error('Payload is missing!')

            const { sku } = action.payload

            const filteredCart = state.filter((item) => item.sku !== sku)

            const itemExists: CartItemType | undefined = state.find(item => item.sku === sku)
            if(!itemExists) throw new Error(" Item doesn't exist! ")
            const updatedItem = {...itemExists, qty: action.newQ }
            return [...filteredCart, updatedItem ]
        }
        case REDUCER_ACTIONS.SUBMIT: {
            return []
        }
        default:
            throw new Error('unidentified reducer action type!')
    }
}





function useCartContext(initCartState: CartType){

    const [state, dispatch] = useReducer(reducer, initCartState)

    const totalItems = state.reduce((prevValue, item) => { return prevValue + item.qty}, 0)

    const totalPrice = new Intl.NumberFormat('en-US', { style:'currency', currency:'USD'}).format( state.reduce((prevValue, item) => { return prevValue + ( item.qty * item.price )}, 0))

    const cart = [...state].sort((a, b) => {
        const numberA = Number(a.sku.slice(-4))
        const numberB = Number(b.sku.slice(-4))
        return numberA - numberB
    })

    return {dispatch, totalItems, totalPrice, cart}

}

export type dispatchType = React.ActionDispatch<[action: actionType]>

export type useCartTypeContext = ReturnType<typeof useCartContext>


const initCartContext: useCartTypeContext = {
    dispatch: () => {},
    totalItems: 0,
    totalPrice: '',
    cart: []
}


type childrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

const CartContext = createContext<useCartTypeContext>(initCartContext)

export function CartProvider({children}: childrenType) {

    const {dispatch, totalItems, totalPrice, cart} = useCartContext(initState)

    return ( 
        <CartContext.Provider value={ {dispatch, totalItems, totalPrice, cart }}>
            {children}
        </CartContext.Provider>
     );
}


export default CartContext

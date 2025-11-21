import { createContext, useState, type ReactElement } from "react";


export type ProductType = {
    sku: string,
    name: string,
    price: number
}


const initstate: ProductType[] =  [
        {  sku:"item0001",
            name: "Widget",
            price: 9.99
        },
        {
            sku: "item0002",
            name: "Premium Widget",
            price: 19.99
        },
        {
            sku: "item0003",
            name: "Deluxe Widget",
            price: 29.99
        }
    ]


export const ProductsContext = createContext<{
    products: ProductType[]
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
}
>({products: initstate, setProducts: () => {} })
        
type childrenTypes = ReactElement | ReactElement[] | undefined

type childrenType = {
    children?: childrenTypes
}


function ProductsProvider({ children }: childrenType) {

    const [products, setProducts] = useState<typeof initstate>(initstate)

    return ( 
    <ProductsContext.Provider value={{products, setProducts}}>
        {children}
    </ProductsContext.Provider> );
}

export default ProductsProvider;
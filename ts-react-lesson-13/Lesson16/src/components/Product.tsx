import { type ProductType } from "../context/productsProvider";
import { REDUCER_ACTIONS } from "../context/CartProvider";
import { type dispatchType } from "../context/CartProvider";

type PropTypes = {
    key: string
    dispatch: dispatchType,
    product: ProductType
    inCart: boolean
}


function Product({key, dispatch, product, inCart}: PropTypes) {

    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

    const content = (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="product__img" />
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </article> ) 


    return content ;

}

export default Product;
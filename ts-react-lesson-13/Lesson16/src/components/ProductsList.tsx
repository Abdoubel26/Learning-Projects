import { useContext, type ReactElement } from "react";
import { ProductsContext } from "../context/productsProvider";
import  CartContext from "../context/CartProvider";
import Product from "./Product";


function ProductList() {

    const {products, setProducts} = useContext(ProductsContext)
    const { totalItems, totalPrice, dispatch, cart} = useContext(CartContext)

    let PageContent: ReactElement | ReactElement[]  = <p>Loading...</p>

    if(products?.length) {
        products.map( product => {
           const inCart: boolean = products.some(item => item.sku === product.sku) 

           return (
            <Product
            key={product.sku}
            dispatch={dispatch}
            product={product} 
            inCart={inCart}
             />
           )
        })

        
    }

    return ( <> {PageContent} </> );
}

export default ProductList;
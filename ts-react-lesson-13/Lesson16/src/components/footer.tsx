import { useContext } from "react";
import CartContext from "../context/CartProvider";
import { type useCartTypeContext } from "../context/CartProvider";

type PropTypes = {
    viewCart: boolean
}

function Footer({ viewCart }: PropTypes) {

    const values: useCartTypeContext = useContext(CartContext)

    const year: number = new Date().getFullYear()

    const PageContent =  viewCart ? ( <p> Shopping Cart &copy; {year} </p>) : (
        <>
        <p>Total Items: {values.totalItems}</p>
        <p>Total Price: {values.totalPrice}</p>
        <p>Shopping Cart &copy; {year}</p>
        </>
    )



    const content = ( 
    <footer className="footer">
        {PageContent}
    </footer>)

    return content ;
}

export default Footer;
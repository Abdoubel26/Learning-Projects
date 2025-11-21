import { useContext } from "react";
import CartContext from "../context/CartProvider";
import {  type useCartTypeContext } from "../context/CartProvider";
import Nav from "./Nav";


type PropTypes = {
    viewCart: boolean
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({viewCart, setViewCart}: PropTypes) {

    const values: useCartTypeContext = useContext(CartContext)

    const content = 
    (
        <header className="header">
            <div className="header__title-bar">
                <h1>Acme Co.</h1>
                <div className="header__price-box">
                    <p>Total Items: {values.totalItems}</p>
                    <p>Total Price: {values.totalPrice}</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    )

    return content
}

export default Header;

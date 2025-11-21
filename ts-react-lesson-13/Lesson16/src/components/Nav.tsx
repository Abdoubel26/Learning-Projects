
type PropTypes = {
    viewCart: boolean
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

function Nav({ viewCart, setViewCart }: PropTypes) {
    
    const button = viewCart
    ? 
    <button onClick={() => setViewCart(!viewCart)} > View Products </button> 
    : 
    <button onClick={() => setViewCart(!viewCart)} > View Cart </button>
    
    return ( 
    <nav className="nav">
        {button}
    </nav>
 );
}

export default Nav;
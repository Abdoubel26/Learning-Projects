import { useState } from 'react'
import Header from './components/header'
import ProductList from './components/ProductsList'
import Cart from './components/cart'
import Footer from './components/footer'
import { CartProvider } from './context/CartProvider'
import ProductsProvider from './context/productsProvider'


function App() {

  const [viewCart, setViewCart] = useState<boolean>(false)

  const PageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <>
    <CartProvider >
    <ProductsProvider>
    <Header viewCart={viewCart} setViewCart={setViewCart} />
    {PageContent}
    <Footer viewCart={viewCart} />
    </ProductsProvider>
    </CartProvider>
    </>
  )
  
  return content
  
}

export default App


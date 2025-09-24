import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
    <div className="flex flex-col items-center">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/About" element={<About />}/>
    </Routes>
    </div>
    </>
  )
}

export default App

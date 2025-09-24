import { NavLink } from "react-router-dom"

function NavBar() {
  const baseClasses = "bg-blue-200 p-3 border-1 rounded-3xl my-2 cursor-pointer";
  return (

   
    <>
    <div className="flex flex-col items-center ">
        <ul className="flex gap-6 bg-pink-200 p-2 rounded-4xl my-2 px-5 shadow-xl">

            <NavLink to='/'
            className={({ isActive }) =>
            `${baseClasses} ${isActive ? "text-red-500" : "text-blue-600"}`
          } 
            >
              <li>Home</li></NavLink>

            <NavLink to='/products' className={({ isActive })=> `${baseClasses} ${isActive ? 'text-red-500 ' : 'text-blue-600'}`}><li>Products</li></NavLink>
            <NavLink to='/contact' className={({ isActive })=> `${baseClasses} ${isActive ? 'text-red-500 ' : 'text-blue-600'}`}><li>Contact</li></NavLink>
            <NavLink to='/about' className={({ isActive })=> `${baseClasses} ${isActive ? 'text-red-500 ' : 'text-blue-600'}`}><li>About</li></NavLink>
        </ul>
    </div>
    </>
  )
}

export default NavBar

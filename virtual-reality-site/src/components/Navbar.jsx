import logo from "../assets/logo.png";
import {Menu, X} from 'lucide-react';
import React, {useState} from "react";
import { navItems } from "../constants/index.jsx";


function Navbar() {

    const [MDO, setMDO] = useState(false);


    const toggleNavbar = () => {
        setMDO(!MDO)
        if(MDO){
        console.log('Navbar Drawer Open')
    }
    }


    return(
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center flex-shrink-0">
                        <img src={logo} alt='' className='h-10 w-10 mr-2'/>
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                       <ul className="list-none hidden lg:flex ml-14 space-12">
                        {navItems.map((item, index) => { 
                            return(
                                <li key={index} className="mx-6  hover:scale-[110%] duration-100">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            );
                            })}
                       </ul>
                       <div className="hidden lg:flex justify-center space-x-12 items-center ">
                        <a href="#" className='py-2 px-2 border rounded-md  hover:bg-amber-200 hover:text-black transition-all duration-300'>
                            Sign In
                        </a>
                        <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-300 to-orange-600 '>
                            Create an Account
                        </a>
                       </div>

                        <div className="lg:hidden">
                            <button onClick={toggleNavbar} className="transition-all">{MDO? <X /> : <Menu />}</button>
                        </div>
                </div>
                {MDO && (
                    <div className='lg:hidden w-[90%] fixed right-0 z-20 bg-neutral-900 p-10 flex flex-col jusify-center items-center'>
                        <ul className="list-none">
                            {navItems.map((item, index) => (
                                <li key={index} className="border-b py-3 px-40 hover:bg-amber-200 hover:text-black transition-all duration-100">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="justify-center space-x-12 items-center pt-10">
                        <a href="#" className='py-2 px-2 border rounded-md hover:bg-amber-200 hover:text-black transition-all duration-300'>
                            Sign In
                        </a>
                        <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-300 to-orange-600 '>
                            Create an Account
                        </a>
                       </div>
                    </div>
                )}
                </div>
        </nav>
    )
}

export default Navbar;
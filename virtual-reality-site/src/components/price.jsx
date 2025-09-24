import { pricingOptions } from "../constants";
import { Check } from "lucide-react";

function Pricing(){

    return(
        <div className="flex text-center flex-col border border-neutral-800  pb-10">
            <h1 className="text-6xl text-center p-4 pt-6">Pricing</h1>
            <div className="flex flex-col lg:flex-row md:flex-row  items-center w-full pt-5">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="border border-neutral-700 w-[80%] m-3 rounded-xl p-5 justify-start md:w-[40%]   sm:w-[60%]">
                        <h1 className="text-4xl p-3 text-start">{option.title}{option.title === 'Pro' && (
                            <span className="lg:text-xl text-sm bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">(Most Popular)</span>
                        )}</h1>
                        <h1 className="lg:text-6xl text-4xl  text-start p-2 my-2">{option.price}<span className="text-sm text-neutral-500 ">/month</span></h1>

                        <ul>
                            {option.features.map((feature, index) => (
                               <li key={index} className="text-start flex lg:py-3 py-1 m-3"><Check size={20} color="orange" className="mr-1"/>{feature}</li> 
                            ))} 
                        </ul>
                        <button className="border my-8 w-[80%] text-3xl p-1 rounded text-neutral-50 bg-neutral-950 border-orange-500 hover:bg-orange-500 transition-all duration-300">Subscribe</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing;


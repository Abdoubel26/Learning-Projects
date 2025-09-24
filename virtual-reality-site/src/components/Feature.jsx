import { features } from "../constants/index.jsx";

function FeatureSec(){

    return(
        <div className="mt-20 relative border-neutral-800 border min-h-[50rem] text-center pt-10 pb-20">
            <span className='text-center bg-neutral-900 text-orange-500 rounded-full h-6 text-sm px-5 p-4  uppercase '>
                Features
            </span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl m-6 mt-10 '>Easily build
                 <span className="bg-gradient-to-l from-orange-100 to-orange-500 text-transparent bg-clip-text">
                    {' '} your code!</span></h2>
            <div className="grid lg:grid-cols-3  gap-2 lg:gap-4 grid-cols-1 mt-10 lg:mt-20"> 
                {features.map((feature, index) => (
                    <div key={index} className="bg-neutral-800 p-2 rounded-2xl mx-2">
                        <div className="flex">
                            <div className="flex mx-3 h-8 w-8  p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                                {feature.icon}
                            </div>

                            <div  className="mt-1 mb-6">
                               <h1 className="font-bold text-xl text-start">{feature.text}</h1> 
                                <p className="mt-4 text-neutral-600 text-start">{feature.description}</p>   
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSec;
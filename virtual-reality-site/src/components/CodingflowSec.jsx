import image from '../assets/code.jpg'
import { checklistItems } from '../constants';
import { Check} from 'lucide-react'

function CodingFlowSec(){
    return(
        <div className='flex flex-col justify-center items-center pt-20 border-b border-neutral-800 '>
            <h1 className='text-4xl lg:text-7xl  mb-7 text-center'>Accelerate Your <span className='bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text'>Coding flow</span></h1>
            <div className='lg:flex w-full'>
            <img src={image} className='lg:w-[50%] w-[100%]' /> 
            <div className=' w-[100%] flex flex-col'>
                {checklistItems.map((item, index) => (
                    <>
                    <div key={index} className=' p-4 my-3'>

                    <div className='flex'>
                    <div className='bg-neutral-800 border border-orange-500 rounded-full p-1 m-1 max-h-fit'>
                        <Check color='green' size={25} />
                    </div>
                    <h1 className='mt-2 text-xl ml-1'>{item.title}</h1>
                    </div>
                    <p className='text-neutral-500 p-4'>{item.description}</p>

                    </div>
                    
                    </>
                ) )}
            </div>
             </div>   
        </div>
        
    )
}

export default CodingFlowSec;
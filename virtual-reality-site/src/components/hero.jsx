import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

function HeroSection(){

    return(
        <div className='flex flex-col items-center text-center justify-center mt-6 lg:mt-20'>
            <h1 className='lg:text-5xl lg:min-w-[40rem] text-4xl p-5 max-w-[30rem]'>VirtualR build tools <span className='bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text'>for <br /> developers</span></h1>
            <p className='text-gray-500 py-5 text-[0.7rem] md:mx-[0.32rem] lg:text-[1rem] lg:mx-[1rem]'>Empower your creativity and bring your VR app ideas to life with our intuituve develepment tools. <br /> Get started today and turn your imagination into immersive reality!</p>

            <div className=' flex lg:mb-16 mb-4 ml-6'>
                <button className='bg-gradient-to-r from-orange-300 to-orange-600 m-3 p-2 rounded font-semibold'>Start for free</button>
                <button className='p-2 rounded font-semibold border m-3'>Documentation</button>
            </div>

            <div className='flex justify-between w-[90%] m-6'>
            <video autoPlay muted loop className='lg:w-[49%]  w-[48%] border border-orange-400 rounded-xl'>
                <source src={video1} type='video/mp4'></source>
                Your browser does not support the video tag.
            </video>
            <video autoPlay muted loop className='lg:w-[49%] w-[48%]  border border-orange-400 rounded-xl'>
                <source src={video2} type='video/mp4'></source>
                Your browser does not support the video tag.
            </video>
            </div>
   
        </div>
    )
}

export default HeroSection;
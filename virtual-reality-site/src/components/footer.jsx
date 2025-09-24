import { resourcesLinks, platformLinks, communityLinks } from '../constants'

function Footer(){
    return(
        <div className='flex flex-wrap justify-between border-t-1 border-neutral-800 font-poppins'>
            <div className='p-2 mx-5'>
                <h1 className=' font-bold py-4 text-xl'>Resources</h1>
               <ul>
                {resourcesLinks.map((link, index) => (
                    <li key={index} className='py-1'><a href={link.href} className='hover:text-white text-neutral-300  py-6'>{link.text}</a></li>
                ))}
                </ul> 
            </div>

            <div className='p-2 mx-5'>
                <h1 className=' font-bold py-4 text-xl'>Platform</h1>
               <ul>
                {platformLinks.map((link, index) => (
                    <li key={index} className='py-1'><a href={link.href} className=' hover:text-white text-neutral-300  py-6'>{link.text}</a></li>
                ))}
                </ul> 
            </div>

            <div className='p-2 mx-5'>
                <h1 className=' font-bold py-4 text-xl'>Community</h1>
               <ul>
                {communityLinks.map((link, index) => (
                    <li key={index} className='py-1'><a href={link.href} className='hover:text-white text-neutral-300 py-6'>{link.text}</a></li>
                ))}
                </ul> 
            </div>

            <div className='p-2 mx-5 opacity-0'>
                <h1 >Community</h1>
               <ul>
                {communityLinks.map((_, index) => (
                    <li key={index} ><a></a></li>
                ))}
                </ul> 
            </div>

        </div>
    )
}


export default Footer;
import { useEffect, useState } from "react";


function Dimensions(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);

    function updateDimenions() {
        setWidth(window.innerWidth)
        setheight(window.innerHeight)
    }

    useEffect( () => {
        window.addEventListener('resize', updateDimenions)
        console.log('event listener ADDED')

        return() => {
            window.removeEventListener('resize', updateDimenions);
            console.log('event listener Removed!')  
        }
            
    }, [])

    useEffect(() => {
        document.title = `sixe: ${width} x ${height}`
    })

    return(
        <>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
        </>
    )
}


export default Dimensions;
import { useEffect, useState } from "react";
import './clock.css'
import { use } from "react";



function Clock(){
    const [time, setTime] = useState(new Date());


    useEffect( () => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        console.log(intervalId);
        return () => {
            clearInterval(intervalId);
        }
    })

    function updateclock() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';


        hours = hours % 12 || 12;
        return(`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`)
    }

    function padZero(Parameter){
        return (Parameter < 10 ? '0' : "") + Parameter;
    }
    return(
        <div className="ClockContainer">
                <span className="Time">{updateclock()}</span>
        </div>
    )

}

export default Clock;
import React, {useEffect, useState, useRef} from 'react';
import './Stopwatch.css'

function Stopwatch(){

    const [time, setTime] = useState();
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElaspsedTime] = useState(0);
    const startTimeRef = useRef(0);
    const intervalIdRef = useRef(null)
    
    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElaspsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);


    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        console.log(startTimeRef.current);
    };
    
    function reset(){
        setIsRunning(false);
        setElaspsedTime(0);
    };
    
    function stop() {
        setIsRunning(false);
    };
 
    function formatTime(){
        let hours = Math.trunc(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.trunc(elapsedTime / (1000 * 60 ) % 60);
        let seconds = Math.trunc((elapsedTime / 1000) % 60);
        let milliseconds = Math.trunc((elapsedTime % 1000) / 10) ;

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`

    };

    

    return(
        <>
        <h1>Stopwatch</h1>
        <div className='wrapper'>
            <h2 class='time'>{formatTime()}</h2>
            <div className='btnCtnr'>
                <button className='SB'onClick={start} >start</button>
                <button className='RB' onClick={reset}>reset</button>
                <button className='PB' onClick={stop}>pause</button>
            </div>
        </div>
        </>
    )
}

export default Stopwatch;
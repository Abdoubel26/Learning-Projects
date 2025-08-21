import React, {useState, useRef, useEffect} from 'react';

function Mycomponenet3() {

    let element = useRef(null);
    let element2 = useRef(null);
    let element3 = useRef(null);

    function handleClick1(){
        element.current.style.backgroundColor = 'yellow';
        element3.current.style.backgroundColor = '';
        element2.current.style.backgroundColor = '';
        element.current.focus();
    }

    function handleClick2(){
        element2.current.style.backgroundColor = 'yellow';
        element.current.style.backgroundColor = '';
        element3.current.style.backgroundColor = '';
        element2.current.focus();
    }

    function handleClick3(){
        element3.current.style.backgroundColor = 'yellow';
        element2.current.style.backgroundColor = '';
        element.current.style.backgroundColor = '';
        element3.current.focus();
    }




    return(
        <div>
            <button onClick={handleClick1}>Click me!</button>
            <input ref={element}></input><br></br>

            <button onClick={handleClick2}>Click me!</button>
            <input ref={element2}></input> <br></br>

            <button onClick={handleClick3}>Click me!</button>
            <input ref={element3}></input>

        </div>
    )
}

export default Mycomponenet3;
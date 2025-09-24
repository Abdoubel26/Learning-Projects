import { useState, useEffect } from "react";

let result = null;

function Calculator() {

    const [currentOperation, setCurrentOperation] = useState()
    const [screenContent, SetScreenContent] = useState('')
    const [x, setX] = useState(null)


    function SquareRoot() {
        if( screenContent >= 0 ){
            SetScreenContent(`${(screenContent ** (1/2) ).toString()}`)
        }
        else {
            SetScreenContent(`Error`)
        }
    }


    function Clear() {
        SetScreenContent('')
        setX(null)
        setCurrentOperation()
        result = null;
    }

    function evaluate() {
        let y = screenContent !== '' ? screenContent : null;

    
        if( currentOperation === 'subtract' && screenContent === '') {
            display(`${x * -1}`)
        }
        else if( screenContent === ''){
            display(`${x}`)
        }

        

        switch(true) {
            case currentOperation === 'add' && y !== null :
                result = Number(x) + Number(y)
                break
            case currentOperation === 'subtract' && y !== null :
                result = Number(x) - Number(y);
                break;
            case currentOperation === 'multiply':
                result = Number(x) * Number(y);
                break;
            case currentOperation === 'divide':
                result = Number(y) !== 0 ? Number(x) / Number(y) : 'Error';
                break;
            case currentOperation === 'percentage':
                result =  ((Number(x) * 100) / Number(y)).toString() + '%' ;
                break;
        }
        
        if( result !== null ){
            SetScreenContent(result.toString())
        }
        
    }

    function display(value) {
        SetScreenContent(screenContent + value)
    }

  
    
    

    function CurrentOperationChanger(operation){
        if(screenContent !== ''){
           setCurrentOperation(operation)
           setX(screenContent)
            SetScreenContent('') 
        }
        
        
        
    }

    return ( 
    <>
    
    <div className="flex flex-col rounded-2xl border overflow-hidden">
        <div className="bg-gray-800 text-right p-5 text-4xl h-18">
            {screenContent}
        </div>

        <div className="grid grid-cols-3 bg-gray-900 p-5 gap-3">

            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={Clear}>C</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none"  onClick={() => CurrentOperationChanger('percentage')}>%</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none "  onClick={SquareRoot}>√</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(9)}>9</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(8)}>8</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => CurrentOperationChanger('add')}>+</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(7)}>7</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(6)}>6</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => CurrentOperationChanger('subtract')}>-</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(5)}>5</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(4)}>4</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => CurrentOperationChanger('multiply')}>×</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(3)}>3</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(2)}>2</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => CurrentOperationChanger('divide')}>÷</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(1)}>1</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-gray-800 transition-all select-none" onClick={() => display(0)}>0</button>
            <button className="bg-black text-yellow-400 rounded text-3xl px-5 hover:bg-white transition-all select-none" onClick={evaluate}>=</button>
        </div>
    </div>
    </> 
    );
}

export default Calculator;
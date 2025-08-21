import React, {use, useEffect, useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} Bananas`
    })

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    const styles = {
        div: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        },
        button: {
            margin: '5px',
            padding: '10px 15px',
            fontSize: '16px',
            cursor: 'pointer',
            textAlign: 'center',
            fontFamily: 'Segoe UI',
            userSelect: 'none',
            backgroundColor: 'hsl(210, 100%, 50%)',
            border: 'none',
            borderRadius: '1000px',
            color: 'white',
            fontWeight: 'bold',
        },
        h1: {
            fontFamily: 'Segoe UI',
            fontSize: '5rem',
            color: 'blue',
            textAlign: 'center',
        }
    }
    return (
        <>
        <div style={styles.div}>
        <h1 style={styles.h1}>{count}</h1>
        <div className='button-container'>
            <button style={styles.button} onClick={decrementCount}>Decrement</button>
            <button style={styles.button} onClick={resetCount}>Reset</button>
            <button style={styles.button} onClick={incrementCount}>Increment</button>             
        </div>
        </div>
        </>
    )
}

export default Counter;
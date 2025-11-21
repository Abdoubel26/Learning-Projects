import { useState, useEffect, useCallback, MouseEvent , KeyboardEvent, useMemo, useRef } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState<number | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)


  function fibfunc(n: number): number {
    if(n < 2 ) return n 
    return fibfunc(n - 1 ) + fibfunc(n - 2)
  }

  const Mynum: number = 26

  const result = useMemo(() => fibfunc(Mynum), [Mynum])

  console.log(result)
  useEffect(() => {
    console.log('mounting')

    return () => console.log('unmounting')
  }, [count])


  const Add = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => setCount(prev => prev as number + 1), [])
  return (
    <>
    <button onClick={Add}>{result}</button>
    <input ref={inputRef} type='text'></input>
    </>
  )
}

export default App

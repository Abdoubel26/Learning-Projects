import { useState } from 'react'
import Calculator from './Calculator'

function App() {
  

  return (
    <>
    
    <div className='flex flex-col items-center justify-center w-full min-h-screen '>
      <h1 className=' text-center mb-14 font-bold text-3xl select-none'>Calculator</h1>
      <Calculator />
    </div>
    </>
  )
}

export default App

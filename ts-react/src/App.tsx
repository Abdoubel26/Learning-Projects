import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/counter'
import { useState } from "react";
import List from './components/list';

function App() {

  const [count, setCount] = useState<number>(0)
  
  return (
    <>
     <Heading title='Hello!'/>
     <Section title='Different title'>This is my section.</Section>
     <Counter setCount={setCount} >Count is {count}</Counter>
     <List items={["Astrophysics 🌌", "Coding 💻", "Rockets 🚀"]} render={(item: string) => <span className='gold'>{item}</span>}></List>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Input from './components/input'
import ListItems from './components/listItems'
import TodosProvider from './context/TodosContext'

function App() {
  return (
    <TodosProvider>
      <Input />
      <ListItems />
    </TodosProvider>
  )
}

export default App

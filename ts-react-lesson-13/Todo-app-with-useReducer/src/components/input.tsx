import React, { useState, useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

function Input() {
  const [text, setText] = useState('')
  const ctx = useContext(TodosContext)
  if (!ctx) throw new Error('TodosContext not found — wrap your app with TodosProvider')
  const { todos, setTodos } = ctx

  const add = () => {
    const v = text.trim()
    if (!v) return
    setTodos([...todos, v])
    setText('')
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={add}>Add</button>
    </div>
  )
}

export default Input

import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

function ListItems() {
    const ctx = useContext(TodosContext)
    if (!ctx) throw new Error('TodosContext not found — wrap your app with TodosProvider')
    const { todos, setTodos } = ctx

    const remove = (index: number) => setTodos(todos.filter((_, i) => i !== index))

    return (
        <ul>
            {todos.length === 0 ? (
                <li>No todos</li>
            ) : (
                todos.map((t, i) => (
                    <li key={i}>
                        {t}
                        <button onClick={() => remove(i)}>D</button>
                    </li>
                ))
            )}
        </ul>
    )
}

export default ListItems
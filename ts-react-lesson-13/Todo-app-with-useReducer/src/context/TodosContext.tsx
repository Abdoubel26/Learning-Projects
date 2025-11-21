import React, { createContext, useState, ReactNode } from 'react'

type TodosContextType = {
  todos: string[]
  setTodos: React.Dispatch<React.SetStateAction<string[]>>
}

export const TodosContext = createContext<TodosContextType | undefined>(undefined)

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<string[]>([])

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider

import React, { useContext } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Todo from './Todo.js'
import { UserContext } from '../context/UserProvider'


export default function Profile(){
  // pulling out context here         // to avoid consuming again
  const { 
    user: { 
      username 
    }, 
    addTodo, 
    todos 
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Todo</h3>
      <TodoForm addTodo={addTodo}/>
      <h3>Your Todos</h3>
      <TodoList todos={todos}/>
    </div>
  )
}
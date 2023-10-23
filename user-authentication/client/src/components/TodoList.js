import React from 'react'
import Todo from './Todo.js'

export default function TodoList(props){
  const { todos } = props
  return (
    <div className="todo-list">
      {/* instead of <Todo title={todo.title} imgUrl={todo.imgUrl}, spread it into the props object */}
      { todos.map(todo => <Todo {...todo} key={todo._id}/>) }
    </div>
  )
}
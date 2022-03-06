import React from 'react'

const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => todo.id !== item.id))
  }

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !todo.completed,
          }
        }
        return item
      }),
    )
  }

  return (
    <div
      key={todo}
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
    >
      <input
        type="checkbox"
        name={`id-${todo.id}`}
        id={`id-${todo.id}`}
        onChange={completedHandler}
        checked={todo.completed ? true : false}
      />
      <label htmlFor={`id-${todo.id}`}>{todo.text}</label>
      <button className="delete" onClick={deleteHandler}>
        <span></span>
        <span></span>
      </button>
    </div>
  )
}

export default Todo

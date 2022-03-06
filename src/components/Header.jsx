import { useState } from 'react'

const Header = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (!newTodo == '') {
      setTodos([
        ...todos,
        {
          text: newTodo,
          completed: false,
          id: Math.round(Math.random() * 1000) / 1000,
        },
      ])
    }
    setNewTodo('')
  }

  return (
    <div className="header">
      <h1>Todo</h1>
      <div className="input-field">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Create a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo([e.target.value])}
          autofocus="true"
        />
        <button className="add-todo" onClick={addTodo}></button>
      </div>
    </div>
  )
}

export default Header

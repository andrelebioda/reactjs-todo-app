import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import TodoList from './components/TodoList'
import '../src/scss/style.scss'

const App = () => {
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filterStatus, setFilterStatus] = useState('all')

  const getLocalStorage = () => {
    const storage = JSON.parse(localStorage.getItem('Todos'))
    if (storage) {
      setTodos(storage)
    }
  }

  const setLocalStorage = () => {
    localStorage.setItem('Todos', JSON.stringify(todos))
  }

  useEffect(() => {
    getLocalStorage()
  }, [])

  useEffect(() => {
    filterHandler()
    setLocalStorage()
  }, [todos, filterStatus])

  const filterHandler = () => {
    switch (filterStatus) {
      case 'active':
        setFilteredTodos(todos.filter((todo) => todo.completed == false))
        break
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed == true))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed == false))
  }

  return (
    <div className="container">
      <Header
        todos={todos}
        setTodos={setTodos}
        setFilteredTodos={setFilteredTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        filterStatus={filterStatus}
      />
      {todos.length > 0 ? (
        <Filter
          setFilterStatus={setFilterStatus}
          clearCompleted={clearCompleted}
          filterStatus={filterStatus}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default App

import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos, filterStatus }) => {
  return (
    <div className="todo-list">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <h2>
          {filterStatus == 'active'
            ? 'You have no active todos...'
            : filterStatus == 'completed'
            ? 'You have no completed todos...'
            : 'You have no todos...'}
        </h2>
      )}
    </div>
  )
}

export default TodoList

import { useState } from "react";

const Header = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo == "") {
      setTodos([
        ...todos,
        {
          text: newTodo,
          completed: false,
          id: Math.round(Math.random() * 1000) / 1000,
        },
      ]);
    }
    setNewTodo("");
  };

  return (
    <div className="header">
      <h1>Todo</h1>
      <div>
        <form onSubmit={addTodo} className="input-field">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Create a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo([e.target.value])}
            autoFocus={true}
          />
          <button className="add-todo" type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default Header;

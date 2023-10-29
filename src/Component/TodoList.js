import React, { useState } from "react";
import "./TodoList.css";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="main-contain-todo-list">
      <div className="container">
        <header>
          <h2>TODO LIST APP</h2>
          <p>Create your List and click to set completed Todo</p>
        </header>
        <div className="todo-form">
          <input
            type="text"
            placeholder="ENTER YOUR NEW TODO"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTodo} className="add-button">
            Add
          </button>
        </div>
        <ul className="todo">
          {todos.map((todo) => (
            <li key={todo.id} style={{ padding: "10px 10px 10px 10px" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  padding: "8px 8px",
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

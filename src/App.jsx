import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <div className="todo-container">
        <h1>My Todo List</h1>
        <p className="subtitle">Double-click a todo to edit it</p>
      </div>
    </div>
  );
}

export default App;

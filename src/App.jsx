// App.js
import React, { useState, useEffect } from 'react';
import TodoList from '../src/components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: newTodo,
      priority: newTodoPriority,
      dueDate: dueDate,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTask]);
    setNewTodo('');
    setNewTodoPriority('Low');
    setDueDate('');
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <select
            value={newTodoPriority}
            onChange={(e) => setNewTodoPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label>
            Due Date:
            <input
              type="date"
              value={dueDate}a
              onChange={(e) => setDueDate(e.target.value)}
            />
          </label>
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </header>
      <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
    </div>
  );
}

export default App;

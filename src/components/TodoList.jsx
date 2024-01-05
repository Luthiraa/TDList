import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Task</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Days Left</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;

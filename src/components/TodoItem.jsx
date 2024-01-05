import React from 'react';
import './TodoItem.css';

const calculateDaysLeft = (dueDate) => {
  const now = new Date();
  const due = new Date(dueDate + 'T00:00'); 
  const timeDiff = due.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysLeft;
};

const TodoItem = ({ todo, onDelete, onToggle }) => {
  const daysLeft = calculateDaysLeft(todo.dueDate);

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </td>
      <td>
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      </td>
      <td className={`priority-${todo.priority.toLowerCase()}`}>
        {todo.priority}
      </td>
      <td>{todo.dueDate}</td>
      <td>{daysLeft > 0 ? `${daysLeft} days left` : 'Due Today'}</td>
      <td>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
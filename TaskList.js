// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button
            className="complete-button"
            onClick={() => toggleTask(task.id)}>
            {task.isComplete ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

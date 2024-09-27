// src/App.js
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskService } from './services/TaskService';
import './App.css'; // Import the CSS file

const App = () => {
  const [tasks, setTasks] = useState(TaskService.getTasks());

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, isComplete: false };
    TaskService.addTask(newTask);
    setTasks([...TaskService.getTasks()]);
  };

  const deleteTask = (id) => {
    TaskService.deleteTask(id);
    setTasks([...TaskService.getTasks()]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
    TaskService.updateTask(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Form from './Form';
import '../styles/TaskList.css';
import Tasks from './Tasks';

function TaskList() {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updateTasks = [task, ...tasks];
      setTask(updateTasks);
    }
  };

  const deleteTask = (id) => {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTask(updateTasks);
  };

  const completedTask = (id) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTask(updateTasks);
  };

  return (
    <>
      <Form onSubmit={addTask} />
      <div className='task-list-container'>
        {tasks.map((task) => (
          <Tasks
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            completedTask={completedTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;

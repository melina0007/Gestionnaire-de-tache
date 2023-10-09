import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='main-container'>
      <div className='todo-list'>
        <h1>Mes tâches</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;

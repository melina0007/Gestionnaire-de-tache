import React from 'react';
import '../styles/Tasks.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tasks({ id, text, completed, completedTask, deleteTask }) {
  return (
    <div
      className={completed ? 'tasks-container completed' : 'tasks-container'}
    >
      <div className='tasks-text' onClick={() => completedTask(id)}>
        {text}
      </div>
      <div className='tasks-icon-container' onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='tasks-icon' />
      </div>
    </div>
  );
}

export default Tasks;

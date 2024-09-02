import React from 'react';
import './Detail.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Detail({ task, onClose, onEdit, onDelete }) {
  return (
    <div className="overlay">
      <div className="detail-modal">
        <button onClick={onClose} className="close-button"><CloseRoundedIcon /></button>
        <h1>{task.title}</h1>
        {task.description && <p>{task.description}</p>}
        {task.dueDate && <div>Due Date: {new Date(task.dueDate).toLocaleDateString()}</div>}
        
        <div >
        <button className='mx-0' onClick={() => { onClose() ; onDelete(task._id);  }}><DeleteIcon /></button>
        <button className='mx-0' onClick={() => {  onClose() ; onEdit(task); }}><EditIcon /></button>
        </div>
      </div>
    </div>
  );
}

export default Detail;

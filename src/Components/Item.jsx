import React, { useState } from 'react';
import Detail from './Detail';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

function Item({ task, onEdit, onDelete }) {
  const [showDetail, setShowDetail] = useState(false);

  const handleDetailClick = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    console.log("closed");
    setShowDetail(false);
  };

  return (
    <>
      <div className='note' onClick={handleDetailClick}>
        <h1>{task.title}</h1>
        {task.description !== "" && <p>{task.description}</p>}
        <div className='due-date'><CalendarMonthRoundedIcon /> <span >{task.dueDate ?  new Date(task.dueDate).toLocaleDateString() : "NA"}</span> </div>
      </div>

      {showDetail && <Detail task={task} onClose={handleCloseDetail}  onEdit={onEdit} onDelete={onDelete}/>}
    </>
  );
}

export default Item;

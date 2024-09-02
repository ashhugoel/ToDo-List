import React, { useState, useEffect, useRef } from 'react';
import { createTodo } from '../api';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



const Form = ({ isEditing, setTasks, tasks, currentTask, handleUpdateTask }) => {
    const [expand, setexpand] = useState(false)
    const outsideclick = useRef(null)

    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Medium'
    });

    useEffect(() => {
        if (isEditing && currentTask) {
            setNewTask({
                title: currentTask.title,
                description: currentTask.description || '',
                dueDate: currentTask.dueDate ? new Date(currentTask.dueDate).toISOString().split('T')[0] : '',
                priority: currentTask.priority || 'Medium'
            });
        } else {
            setNewTask({
                title: '',
                description: '',
                dueDate: '',
                priority: ''
            });
        }
    }, [isEditing, currentTask]);


    useEffect(() => {
        function handleClickOutside(event) {
            if (outsideclick.current && !outsideclick.current.contains(event.target)) {
                setexpand(false);

            }
        }
        document.addEventListener('mousedown', handleClickOutside);

    }, [outsideclick])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({
            ...newTask,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newTask.title.trim() !== '') {
            try {
                if (isEditing) {
                    await handleUpdateTask(newTask);
                } else {
                    const addedTask = await createTodo({
                        ...newTask,
                        dueDate: newTask.dueDate || undefined // Pass undefined if dueDate is empty
                    });
                    setTasks([...tasks, addedTask]);
                }
                setNewTask({ title: '', description: '', dueDate: '', priority: 'Medium' });
            } catch (error) {
                console.error('Error handling task:', error);
            }
        }
    };

    return (
        <form ref={outsideclick} className='create-note' >
            <input
                type="text"
                placeholder="Title"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                onClick={() => { setexpand(true) }}
            />

            {expand && <textarea
                placeholder="Take a description"
                name="description"
                value={newTask.description}
                onChange={handleInputChange}
                rows={2}
            />}

            {expand && <><input
                type="date"
                name="dueDate"
                value={newTask.dueDate}
                onChange={handleInputChange}
            />
                <select className="form-select "
                    name="priority"
                    value={newTask.priority}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>
                        Set priority
                    </option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <Zoom in={true}>
                    <Fab onClick={handleSubmit}>

                        <span>
                            {isEditing ? <UpdateIcon /> : <AddIcon />}
                        </span>
                    </Fab>
                </Zoom> </>}
        </form>
    );
}

export default Form;

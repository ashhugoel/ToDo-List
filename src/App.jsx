import React, { useState, useEffect } from 'react';
import './App.css';
import { getTodos, updateTodo, deleteTodo, queryTodos } from './api';
import Item from './Components/Item';
import Form from './Components/Form';
import Header from './Components/Header.jsx';

function App() {
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const fetchedTasks = await getTodos();
                setTasks(fetchedTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleSearchInputChange = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() !== '') {
            try {
                const queriedTasks = await queryTodos({ title: value });
                setTasks(queriedTasks);
            } catch (error) {
                console.error('Error querying tasks:', error);
            }
        } else {
            try {
                const fetchedTasks = await getTodos();
                setTasks(fetchedTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }
    };

    const handleUpdateTask = async (updatedTask) => {
        try {
            const result = await updateTodo(currentTask._id, updatedTask);
            setTasks(tasks.map((task) =>
                task._id === currentTask._id ? result : task
            ));
            setIsEditing(false);
            setCurrentTask({});
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTodo(taskId);
            setTasks(tasks.filter((task) => task._id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleEditTask = (task) => {
        setIsEditing(true);
        setCurrentTask(task);
    };

    return (
        <>
            <Header
                searchTerm={searchTerm}
                handleSearchInputChange={handleSearchInputChange}
            />
            <div className="App mx-5 " >
                <Form
                    isEditing={isEditing}
                    setTasks={setTasks}
                    tasks={tasks}
                    currentTask={currentTask}
                    handleUpdateTask={handleUpdateTask}
                />
                <div className='d-flex flex-wrap'>
                    {tasks.map((task) => (
                        <Item
                            key={task._id}
                            task={task}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;

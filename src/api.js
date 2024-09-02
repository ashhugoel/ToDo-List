import axios from 'axios';

const BASE_URL = '/api'; // Update with your server's URL if different


// Create a new todo item
export const createTodo = async (todo) => {
  try {
    const response = await axios.post(`${BASE_URL}/new`, todo);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

// Get all todo items
export const getTodos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

// Get a single todo item by id
export const getTodoById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;

  } catch (error) {
    console.error(`Error fetching todo with id ${id}:`, error);
    throw error;
  }
};

// Update a todo item by id
export const updateTodo = async (id, updates) => {
  try {
    const response = await axios.patch(`${BASE_URL}/update/${id}`, updates);
    return response.data.updatedTodo;
  } catch (error) {
    console.error(`Error updating todo with id ${id}:`, error);
    throw error;
  }
};

// Delete a todo item by id
export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting todo with id ${id}:`, error);
    throw error;
  }
};

export const queryTodos = async (queryParams) => {
    try {
      const response = await axios.get(`${BASE_URL}/query`, { params: queryParams });
      return response.data;
    } catch (error) {
      console.error('Error querying todos:', error);
      throw error;
    }
  };
  

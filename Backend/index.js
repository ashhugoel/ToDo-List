import express from 'express';
import mongoose from 'mongoose';
import Todo from './model.js'; // Make sure this points to your Todo model
import { ObjectId } from 'mongodb';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://readwrite:aTaQt1SuobBVileV@api.oicxz.mongodb.net/TODOLIST');
    console.log(`The database is connected with ${mongoose.connection.host}`);
}

connectDB();

// Get all todos
app.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        console.log(todos);
        res.json(todos);
    } catch (error) {
        res.status(500).send("Server error");
    }
});

// Query todos based on query parameters
app.get('/query', async (req, res) => {
    try {
      const query = req.query; 
      const queryObj = {};
      if (query.title) {
        queryObj.title = { $regex: new RegExp(query.title, 'i') }; 
      }
      const todos = await Todo.find(queryObj); 
      res.json(todos);
    } catch (error) {
      console.error(`Error querying ${JSON.stringify(query)}:`, error);
      res.status(500).send('Server error');
    }
  });
  
// Delete a todo by ID
app.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        const result = await Todo.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'No document found with this ID' });
        }
        res.status(200).json({ message: 'Document deleted successfully', result });
    } catch (error) {
        console.error(`Error deleting document with ID ${req.params.id}:`, error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a single todo by ID
app.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).send('ID not found');
        }
        res.json(todo);
    } catch (error) {
        res.status(500).send("Server error");
    }
});

// Create a new todo
app.post('/new', async (req, res) => {
    try {
        const { title, description, completed, dueDate, priority } = req.body;
        if (!title) {
            return res.status(400).send('Title is required');
        }

        const newTodo = new Todo({
            title,
            description,
            completed,
            dueDate,
            priority,
        });

        const savedTodo = await newTodo.save();
        console.log(savedTodo);

        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).send(`Server error ${error}`);
    }
});

// Update an existing todo
app.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ error: 'No update data provided' });
        }

        const updatedTodo = await Todo.findByIdAndUpdate(id, updates, { new: true });
        console.log(updatedTodo);

        if (!updatedTodo) {
            return res.status(404).json({ error: 'No document found with this ID' });
        }

        res.status(200).json({ message: 'Document updated successfully', updatedTodo });

    } catch (error) {
        console.error(`Error updating document with ID ${id}:`, error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

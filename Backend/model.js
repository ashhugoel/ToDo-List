import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // Title is mandatory
  },
  description: {
    type: String,
    required: false, // Optional field for more details about the task
  },
  completed: {
    type: Boolean,
    default: false, // Default is incomplete
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
  dueDate: {
    type: Date,
    required: false,  // Optional field for due date
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'], // Optional field for task priority
    default: 'Medium',
  }
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
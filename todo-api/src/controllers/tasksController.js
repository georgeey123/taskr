const Task = require('../models/taskModel');

const tasksController = {
  getAllTasks: async (req, res) => {
    const { listId } = req.query;

    try {

      if (listId) {
        const tasks = await Task.find({ userId: req.user.id, listId });
        return res.json(tasks);
      } else {
        const tasks = await Task.find({ userId: req.user.id });
        return res.json(tasks);
      }

    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  },
  
  createTask: async (req, res) => {
    const { title, completed, listId } = req.body;

    try {
      const task = await Task.create({ title, completed, listId, userId: req.user.id});
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  },

  getTaskById: async (req, res) => {
    const { taskId } = req.params;

    try {
      const task = await Task.findOne({ _id: taskId, userId: req.user.id });
      
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch task' });
    }
  },

  updateTask: async (req, res) => {
    const { taskId } = req.params;
    const { title, listId, completed } = req.body;

    try {
      const task = await Task.findOneAndUpdate(
        { _id: taskId, userId: req.user.id },
        { title, listId, completed },
        { new: true }
      );
      
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  },

  deleteTask: async (req, res) => {
    const { taskId } = req.params;

    try {
      const task = await Task.findOneAndDelete({ _id: taskId, userId: req.user.id });
      
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  },
};

module.exports = tasksController;

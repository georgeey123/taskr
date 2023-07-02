const Task = require('../models/taskModel');

const tasksController = {
  getAllTasks: async (req, res) => {
    try {
      console.log("req.user", req.user);
      const tasks = await Task.find({ userId: req.user.id });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  },

  createTask: async (req, res) => {
    const { title, completed, userId } = req.body;

    try {
      const task = await Task.create({ title, completed, userId});
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
    const { title, description, completed } = req.body;

    try {
      const task = await Task.findOneAndUpdate(
        { _id: taskId, userId: req.user.id },
        { title, description, completed },
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

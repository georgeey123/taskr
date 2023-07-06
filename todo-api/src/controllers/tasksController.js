const Task = require('../models/taskModel');
const List = require('../models/listModel');

const tasksController = {
  getAllTasks: async (req, res) => {
    const { listId } = req.query;

    try {
      const temporary_Tasks = []

      const lists = await List.find({ userId: req.user.id });

      for (const list of lists) {
        const userTasks = await Task.find({ listId: list._id });
        temporary_Tasks.push(...userTasks);
      }

      if (listId) {
        const tasks = temporary_Tasks.filter((task) => task.listId == listId);
        return res.json(tasks);
      } else {
        const tasks = temporary_Tasks;
        return res.json(tasks);
      }

    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  },
  
  createTask: async (req, res) => {
    const { title, listId } = req.body;

    try {
      const task = await Task.create({ title, completed: false, listId });
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  },

  getTaskById: async (req, res) => {
    const { taskId } = req.params;

    try {
      const task = await Task.findOne({ _id: taskId });
      
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
        { _id: taskId },
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
      const task = await Task.findOneAndDelete({ _id: taskId });
      
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

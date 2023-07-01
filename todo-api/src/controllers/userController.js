const User = require('../models/userModel');

const userController = {
  createUser: async (req, res) => {
    const { name, email } = req.body;

    try {
      const user = await User.create({ name, email });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },

  getUserById: async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await User.findById(userId);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  },

  updateUser: async (req, res) => {
    const { userId } = req.params;
    const { name, email } = req.body;

    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { name, email },
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  deleteUser: async (req, res) => {
    const { userId } = req.params;

    try {
      await User.findByIdAndDelete(userId);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },
};

module.exports = userController;

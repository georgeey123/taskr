const List = require('../models/listModel');

const listController = {
  getLists: async (req, res) => {
    try {
      const lists = await List.find({ userId: req.user.id });
      res.json(lists);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch lists' });
    }
  },
  postList: async (req, res) => {
    const { title } = req.body;

    try {
      const list = await List.create({ title, userId: req.user.id });
      res.status(201).json(list);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create list' });
    }
  },
  getListById: async (req, res) => {
    const { listId } = req.params;

    try {
      const list = await List.findOne({ _id: listId, userId: req.user.id });
      
      if (!list) {
        return res.status(404).json({ error: 'List not found' });
      }
      
      res.json(list);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch list' });
    }
  },
  updateList: async (req, res) => {
    const { listId } = req.params;
    const { title } = req.body;

    try {
      const list = await List.findOneAndUpdate(
        { _id: listId, userId: req.user.id },
        { title },
        { new: true }
      );
      
      if (!list) {
        return res.status(404).json({ error: 'List not found' });
      }
      
      res.json(list);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update list' });
    }
  },
  deleteList: async (req, res) => {
    const { listId } = req.params;

    try {
      const list = await List.findOneAndDelete({ _id: listId, userId: req.user.id });
      
      if (!list) {
        return res.status(404).json({ error: 'List not found' });
      }
      
      res.json(list);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete list' });
    }
  },
}

module.exports = listController;
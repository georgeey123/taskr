const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.getAllTasks);
router.get('/:taskId', tasksController.getTaskById);
router.post('/', tasksController.createTask);
router.patch('/:taskId', tasksController.updateTask);
router.delete('/:taskId', tasksController.deleteTask);

module.exports = router;

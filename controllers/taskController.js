// controllers/taskController.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Sample data
const tasks = [];

// Display a list of tasks
router.get('/', (req, res) => {
  res.render('tasks/index', { tasks });
});

// Create a new task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const task = new Task(tasks.length + 1, title, description);
  tasks.push(task);
  res.redirect('/tasks');
});

module.exports = router;

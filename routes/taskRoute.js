const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// Add a new task
router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Update a task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.update(req.body, { where: { id } });
  res.json(updatedTask);
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = router;

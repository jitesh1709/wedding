const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

// Get all budget items
router.get('/', async (req, res) => {
  try {
    const budgetItems = await Budget.findAll();
    res.json(budgetItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch budget items' });
  }
});

// Add a new budget item
router.post('/', async (req, res) => {
  try {
    const budgetItem = await Budget.create(req.body);
    res.json(budgetItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add budget item' });
  }
});

// Update a budget item by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBudgetItem = await Budget.update(req.body, { where: { id } });
    res.json(updatedBudgetItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update budget item' });
  }
});

// Delete a budget item by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Budget.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete budget item' });
  }
});

module.exports = router;

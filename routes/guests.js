const express = require('express');
const router = express.Router();
const Guest = require('../models/Guest');

// Get all guests
router.get('/', async (req, res) => {
  try {
    const guests = await Guest.findAll();
    res.json(guests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch guests' });
  }
});

// Add a new guest
router.post('/', async (req, res) => {
  try {
    const guest = await Guest.create(req.body);
    res.json(guest);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add guest' });
  }
});

// Update a guest by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGuest = await Guest.update(req.body, { where: { id } });
    res.json(updatedGuest);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update guest' });
  }
});

// Delete a guest by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Guest.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete guest' });
  }
});

module.exports = router;

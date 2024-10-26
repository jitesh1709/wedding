const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login a user
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.status(200).json({ message: 'Logged in successfully', user });
    });
  })(req, res, next);
});

// Logout a user
router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;

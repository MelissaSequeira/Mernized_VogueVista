const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Ensure the path to your model is correct

// Test route for registration
router.get('/', async (req, res) => {
    try {
        const users = await User.find();  // Fetch all users from the database
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }

});

// POST route for user registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json(existingUser);
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

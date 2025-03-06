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


// PATCH route to update user details by ID
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        // Find user by ID
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update only the provided fields
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;

        // Save the updated user back to the database
        await user.save();

        res.status(200).json({ message: 'User updated successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

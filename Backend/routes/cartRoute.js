const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const cartModel = require('../models/cartModel');

// GET - Fetch all cart items
router.get('/cartinfo', async (req, res) => {
    try {
        const cart = await cartModel.find();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST - Add item to cart
router.post('/cartpost', async (req, res) => {
    try {
        const { iname, iprice } = req.body; // ✅ Extract from body

        const cartItem = new cartModel({ iname, iprice });
        const result = await cartItem.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// DELETE - Remove item by ID
router.delete('/cartdelete/:id', async (req, res) => {
    try {
        const deleted = await cartModel.findByIdAndDelete(req.params.id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE - Clear entire cart
router.delete('/cartdeleteall', async (req, res) => {
    try {
        const deletedAll = await cartModel.deleteMany({});
        res.json({ message: "All items deleted", deletedAll });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;

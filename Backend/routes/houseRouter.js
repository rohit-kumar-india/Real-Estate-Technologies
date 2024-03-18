const express = require('express');
const router = express.Router();
const House = require('../models/House'); // Adjust the path as necessary

// POST: Add a new home
router.post('/', async (req, res) => {
  const house = new House(req.body);
  try {
    const newHouse = await house.save();
    res.status(201).json(newHouse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET: Retrieve homes by category
router.get('/category/:category', async (req, res) => {
  try {
    const houses = await House.find({ category: req.params.category });
    res.json(houses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Retrieve homes by pincode (assuming address contains pincode)
router.get('/pincode/:pincode', async (req, res) => {
  try {
    const houses = await House.find({ pincode : req.params.pincode });
    res.json(houses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Retrieve homes based on search criteria
router.get('/search', async (req, res) => {
  const { maxPrice, squareFootage, numBeds, numBaths } = req.query;
  try {
    const query = {
      price: { $lte: maxPrice },
      squareFootage: { $gte: squareFootage },
      numBedrooms: numBeds,
      numBathrooms: numBaths,
    };
    const houses = await House.find(query);
    res.json(houses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Retrieve a home by HomeID
router.get('/:id', async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (!house) {
      return res.status(404).json({ message: 'Home not found' });
    }
    res.json(house);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT: Update a home's information
router.put('/:id', async (req, res) => {
  try {
    const updatedHouse = await House.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedHouse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Remove a home
router.delete('/:id', async (req, res) => {
  try {
    const house = await House.findByIdAndDelete(req.params.id);
    if (!house) {
      return res.status(404).json({ message: 'Home not found' });
    }
    res.json({ message: 'Home deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

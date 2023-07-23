const express = require('express');
const router = express.Router();
const {Members} = require('../db');

// Create a new member
router.post('/', async (req, res) => {
 console.log('control reacches here');
 console.log(req.body);
  try {
    const newMember = await Members.create(req.body);
    res.json(newMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all members
router.get('/', async (req, res) => {
    
  try {
    const allMembers = await Members.find();
    res.json(allMembers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read a specific member by ID
router.get('/:id', async (req, res) => {
  const memberId = req.params.id;
  try {
    const member = await Members.findById(memberId);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a member's details
router.put('/:id', async (req, res) => {
  const memberId = req.params.id;
  try {
    const member = await Members.findByIdAndUpdate(memberId,req.body,{new : true});
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a member
router.delete('/:id', async (req, res) => {
  const memberId = req.params.id;
  try {
    const member = await Members.findByIdAndDelete(memberId);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
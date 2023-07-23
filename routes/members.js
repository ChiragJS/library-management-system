const express = require('express');
const router = express.Router();
const {Members} = require('../db');

// Create a new member
router.post('/members', async (req, res) => {
 
  try {
    const newMember = await Members.create(req.body);
    res.json(newMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all members
router.get('/members', async (req, res) => {
  try {
    const allMembers = await Members.find();
    res.json(allMembers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read a specific member by ID
router.get('/members/:id', async (req, res) => {
  const memberId = req.params.id;
  try {
    const member = await Members.findById(memberId);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a member's details
router.put('/members/:id', async (req, res) => {
  const memberId = req.params.id;
  const { name, contact, membershipDetails } = req.body;
  try {
    const member = await Members.findByIdAndUpdate(memberId,req.body);
    // await member.save();
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a member
router.delete('/members/:id', async (req, res) => {
  const memberId = req.params.id;
  try {
    const member = await Members.findByIdAndDelete(memberId);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
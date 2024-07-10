const express = require('express');
const db = require('../firebase');

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await db.collection('submissions').add({ name, email, message });
    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error adding document: ', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

module.exports = router;
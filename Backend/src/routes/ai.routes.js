const express = require('express');
const aiController = require('../controllers/ai.controller');
const router = express.Router();

// Allow visiting this URL directly in the browser (GET)
router.get('/get-response', (req, res) => {
    res.send('AI review endpoint is live. Send a POST request with JSON { code } to receive a review.');
});

// Frontend calls POST http://localhost:3000/ai/get-response with JSON { code }
router.post('/get-response', aiController.getResponse);

module.exports = router;
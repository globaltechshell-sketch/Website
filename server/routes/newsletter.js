const router = require('express').Router();
const Newsletter = require('../models/Newsletter');

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: 'Email is required' });

        const existing = await Newsletter.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Already subscribed' });

        const sub = await Newsletter.create({ email });
        res.status(201).json({ message: 'Subscribed successfully', sub });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

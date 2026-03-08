const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { auth } = require('../middleware/auth');

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.json({
            token,
            user: { _id: user._id, name: user.name, email: user.email, role: user.role, createdAt: user.createdAt }
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get current user
router.get('/me', auth, (req, res) => {
    res.json({
        user: { _id: req.user._id, name: req.user.name, email: req.user.email, role: req.user.role, createdAt: req.user.createdAt }
    });
});

module.exports = router;

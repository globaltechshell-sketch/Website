const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { auth, adminOnly } = require('../middleware/auth');
const User = require('../models/User');
const Contact = require('../models/Contact');
const Newsletter = require('../models/Newsletter');
const Service = require('../models/Service');

// All admin routes require auth + admin
router.use(auth, adminOnly);

// Dashboard stats
router.get('/stats', async (req, res) => {
    try {
        const [users, newsletters, services, contacts] = await Promise.all([
            User.countDocuments({ role: 'admin' }),
            Newsletter.countDocuments(),
            Service.countDocuments(),
            Contact.countDocuments(),
        ]);
        res.json({ users, newsletters, services, contacts });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// ---- USERS CRUD ----
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

router.post('/users', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) return res.status(400).json({ message: 'Name, email, and password are required' });

        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Email already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({ name, email, password: hashedPassword, role: role || 'user' });

        const { password: _, ...userData } = user.toObject();
        res.status(201).json(userData);
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

router.put('/users/:id', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const updateData = { name, email, role };

        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }

        const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true }).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

// ---- NEWSLETTER CRUD ----
router.get('/newsletter', async (req, res) => {
    try {
        const subs = await Newsletter.find().sort({ createdAt: -1 });
        res.json(subs);
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

router.delete('/newsletter/:id', async (req, res) => {
    try {
        const sub = await Newsletter.findByIdAndDelete(req.params.id);
        if (!sub) return res.status(404).json({ message: 'Subscriber not found' });
        res.json({ message: 'Subscriber removed' });
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

// ---- SERVICES CRUD ----
router.get('/services', async (req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });
        res.json(services);
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

router.post('/services', async (req, res) => {
    try {
        const { title, description, technologies, features, active } = req.body;
        if (!title || !description) return res.status(400).json({ message: 'Title and description are required' });
        const service = await Service.create({ title, description, technologies, features, active });
        res.status(201).json(service);
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

router.put('/services/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!service) return res.status(404).json({ message: 'Service not found' });
        res.json(service);
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

router.delete('/services/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) return res.status(404).json({ message: 'Service not found' });
        res.json({ message: 'Service deleted' });
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

// ---- CONTACTS CRUD ----
router.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

router.delete('/contacts/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.json({ message: 'Contact deleted' });
    } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;

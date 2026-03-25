const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// ===== API Data =====

const minerals = [
  { id: 1, name: 'Iron Ore', capacity: '10M tons/year', image: '/images/iron-ore.png', description: 'High-grade iron ore extraction from premium deposits' },
  { id: 2, name: 'Coal', capacity: '8M tons/year', image: '/images/coal.png', description: 'Thermal and coking coal for power and steel industries' },
  { id: 3, name: 'Bauxite', capacity: '5M tons/year', image: '/images/bauxite.png', description: 'Premium bauxite for aluminium production' },
  { id: 4, name: 'Limestone', capacity: '6M tons/year', image: '/images/limestone.png', description: 'Limestone for cement and construction industries' },
];

const stats = [
  { id: 1, number: 25, suffix: '+', label: 'Years of Excellence' },
  { id: 2, number: 5000, suffix: '+', label: 'Skilled Workforce' },
  { id: 3, number: 15, suffix: '', label: 'Active Mining Sites' },
];

const companyInfo = {
  name: 'SAN Mining Corporation',
  tagline: "Powering India's Growth Through Responsible Mining",
  description: "Leading India's mining revolution with cutting-edge technology, unwavering safety standards, and a commitment to sustainable resource management for future generations.",
  cin: 'U14101HR2010PTC042567',
  address: 'Mining House, Sector 18, Gurgaon, Haryana 122001',
  phone: '+91 124 456 7890',
  email: 'info@sanmining.com',
  founded: 2001,
};

const contactSubmissions = [];

// ===== API Routes =====

// GET minerals
app.get('/api/minerals', (req, res) => {
  res.json(minerals);
});

// GET company stats
app.get('/api/stats', (req, res) => {
  res.json(stats);
});

// GET company info
app.get('/api/company', (req, res) => {
  res.json(companyInfo);
});

// POST contact form / newsletter
app.post('/api/contact', (req, res) => {
  const { name, email, message, phone, type } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const submission = {
    id: contactSubmissions.length + 1,
    name: name || '',
    email,
    message: message || '',
    phone: phone || '',
    type: type || 'contact',
    createdAt: new Date().toISOString(),
  };

  contactSubmissions.push(submission);
  console.log('New contact submission:', submission);

  res.status(201).json({
    success: true,
    message: type === 'newsletter'
      ? 'Successfully subscribed to newsletter!'
      : 'Thank you for contacting us. We will get back to you shortly.',
  });
});

// GET all contact submissions (admin)
app.get('/api/contact', (req, res) => {
  res.json(contactSubmissions);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Start server (Only for local dev)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`\n🏗️  SAN Mining API Server running on http://localhost:${PORT}`);
    console.log(`   API endpoints:`);
    console.log(`   GET  /api/minerals  - List all minerals`);
    console.log(`   GET  /api/stats     - Company statistics`);
    console.log(`   GET  /api/company   - Company information`);
    console.log(`   POST /api/contact   - Submit contact form`);
    console.log(`   GET  /api/health    - Health check\n`);
  });
}

// Export the app for Vercel
module.exports = app;

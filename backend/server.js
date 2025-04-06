const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const postCreateRoutes = require('./routes/postCreateRoutes'); // ✅ Keep this

dotenv.config();
const app = express();

// Database connection
connectDB();

// CORS configuration (use appropriate origin in production)
const corsOptions = {
  origin: 'https://travel-itinerary-frontend-ci0y.onrender.com/', // Change to your actual frontend URL
  methods: 'GET,POST',
};
app.use(cors(corsOptions));

// Middleware to parse incoming JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postCreateRoutes); // ✅ Handles both post and get

// Server listening on appropriate port
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not provided
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Global error handler (useful for debugging)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: 'Something went wrong' });
});

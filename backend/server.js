const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const postCreateRoutes = require('./routes/postCreateRoutes'); // ✅ Keep this

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postCreateRoutes); // ✅ Only this handles both post + get

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});

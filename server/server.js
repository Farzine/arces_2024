const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const adminRoutes = require('./routes/adminRoutes');
const { MONGO_URI } = require('./config/config');
const { initializeAdmin } = require('./models/admin');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/admin', adminRoutes);

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await initializeAdmin(); // Initialize admin if not exists
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

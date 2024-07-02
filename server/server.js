require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors'); 
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const adminRoutes = require('./routes/adminRoutes');
const imageRoutes = require('./routes/imageRoutes');
const importantDateRoutes = require('./routes/importantDateRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const researchTrackRoutes = require('./routes/researchTrackRoutes');
const industryTrackRoutes = require('./routes/industryTrackRoutes');
const frontUrl = process.env.APP_FRONTEND_URL;

const { MONGO_URI } = require('./config/config');
const { initializeAdmin } = require('./models/admin');

const corsOptions ={
  origin:`${frontUrl}`, 
  methods:['GET','POST','PUT','DELETE'],
  credentials:true,            
  optionSuccessStatus:200,
}

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/admin', adminRoutes);
app.use('/images', imageRoutes);
app.use('/important-dates', importantDateRoutes);
app.use('/notices', noticeRoutes);
app.use('/research-tracks', researchTrackRoutes);
app.use('/industry-tracks', industryTrackRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to ARCES_2024');
});

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await initializeAdmin(); 
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

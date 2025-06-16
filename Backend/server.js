const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/userRoute');
const feedRoutes = require('./routes/feedRoute');
const cartRoutes = require('./routes/cartRoute');

// Use Routes
app.use('/api/auth', userRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/cart', cartRoutes);

// ✅ Add this root route
app.get('/', (req, res) => {
  res.send('✅ VogueVista Backend is Live!');
});

// MongoDB Connection and Server Start
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`App is running on port: ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("error:", err);
});

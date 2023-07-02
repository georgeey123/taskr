require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const listRoutes = require('./src/routes/listRoutes');

const WhichUser = require('./src/middlewares/jwt');

const app = express();

app.use(express.json());

app.use('/api/tasks', WhichUser, taskRoutes);
app.use('/api/users', WhichUser, userRoutes);
app.use('/api/lists', WhichUser, listRoutes);
app.use('/api/auth', authRoutes)

const mongoDBUrl = process.env.MONGODB_CONNECTION_URI;

mongoose
  .connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

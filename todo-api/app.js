const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./src/routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

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

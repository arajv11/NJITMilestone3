import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import itemRouter from './routes/itemRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

// Access .env variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err.message);
  });

// Return Express app
const app = express();

// Save form data in json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Backend routes
// For adding new items and users(seed data)
app.use('/api/seed', seedRouter);
// For handling items
app.use('/api/items', itemRouter);
// For handling users
app.use('/api/users', userRouter);
// For handling orders
app.use('/api/orders', orderRouter);

// For heroku deployment
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// Select port to run server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

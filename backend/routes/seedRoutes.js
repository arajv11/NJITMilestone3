import express from 'express';
import Item from '../models/itemModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Item.remove({});
  const createdItems = await Item.insertMany(data.items);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdItems, createdUsers });
});
export default seedRouter;

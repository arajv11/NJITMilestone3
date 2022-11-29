import express from 'express';
import Item from '../models/itemModel.js';
import seedData from '../seedData.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Item.remove({});
  const createdItems = await Item.insertMany(seedData.items);
  await User.remove({});
  const createdUsers = await User.insertMany(seedData.users);
  res.send({ createdItems, createdUsers });
});
export default seedRouter;

import express from 'express';
import Item from '../models/itemModel.js';

const itemRouter = express.Router();

itemRouter.get('/', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

itemRouter.get('/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (item) {
    res.send(item);
  } else {
    res.status(404).send({ message: 'Item Not Found' });
  }
});

export default itemRouter;

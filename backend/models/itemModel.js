import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stockCount: { type: Number, required: true },
    customerRating: { type: Number, required: true },
    reviewCount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model('Item', itemSchema);
export default Item;

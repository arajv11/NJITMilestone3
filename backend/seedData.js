import bcrypt from 'bcryptjs';

const seedData = {
  users: [
    {
      name: 'User1',
      email: 'x@x.com',
      password: bcrypt.hashSync('qwe'),
    },
    {
      name: 'User2',
      email: 'y@y.com',
      password: bcrypt.hashSync('rty'),
    },
  ],
  // Pictures from https://www.verizon.com/connected-smartwatches/apple-watch-series-8/
  items: [
    {
      name: 'Midnight Sport M/L',
      image: '/images/black.jpg',
      price: 750,
      stockCount: 10000,
      customerRating: 4.5,
      reviewCount: 113,
      description: 'black smart watch',
    },
    {
      name: 'Red Sport M/L',
      image: '/images/red.jpg',
      price: 750,
      stockCount: 10000,
      customerRating: 4.5,
      reviewCount: 70,
      description: 'red smart watch',
    },
    {
      name: 'Midnight Sport',
      image: '/images/black.jpg',
      price: 530,
      stockCount: 10000,
      customerRating: 4.5,
      reviewCount: 123,
      description: 'black smart watch',
    },
    {
      name: 'Starlight Sport',
      image: '/images/starlight.jpg',
      price: 530,
      stockCount: 10000,
      customerRating: 4.5,
      reviewCount: 43,
      description: 'cream-colored smart watch',
    },
    {
      name: 'Red Sport',
      image: '/images/red.jpg',
      price: 530,
      stockCount: 10000,
      customerRating: 4.5,
      reviewCount: 231,
      description: 'red smart watch',
    },
    {
      name: 'White Sport S/M',
      image: '/images/white.jpg',
      price: 530,
      stockCount: 10000,
      customerRating: 4.5,
      reviewCount: 32,
      description: 'white smart watch',
    },
    {
      name: 'White Sport M/L',
      image: '/images/white.jpg',
      price: 750,
      stockCount: 10000,
      customerRating: 4.5,
      reviewCount: 3,
      description: 'white smart watch',
    },
  ],
};
export default seedData;

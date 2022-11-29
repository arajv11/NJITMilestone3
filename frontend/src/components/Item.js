import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CustomerRating from './CustomerRating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';

function Item(props) {
  const { item } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/items/${item._id}`);
    if (data.stockCount < quantity) {
      toast.info('Sorry. Item is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="card">
      <div>
        <img src={item.image} className="card-img-top img" alt={item.name} />
      </div>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="product-info">${item.price}</Card.Text>
        <CustomerRating
          customerRating={item.customerRating}
          reviewCount={item.reviewCount}
        />
        {item.stockCount === 0 ? (
          <Button variant="danger">Out of stock</Button>
        ) : (
          <Button onClick={() => addToCartHandler(item)}>Buy this item</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Item;

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
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
    if (data.countInStock < quantity) {
      // window.alert('Sorry. Item is out of stock');
      toast.info('Sorry. Item is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`item/${item.slug}`}>
        <img src={item.image} className="card-img-top" alt={item.name} />
      </Link>
      <Card.Body>
        <Link to={`item/${item.slug}`}>
          <Card.Title>{item.name}</Card.Title>
        </Link>
        <Rating rating={item.rating} numReviews={item.numReviews} />
        <Card.Text>${item.price}</Card.Text>
        {item.countInStock === 0 ? (
          <Button variant="danger">Out of stock</Button>
        ) : (
          <Button onClick={() => addToCartHandler(item)}>Buy this item</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Item;

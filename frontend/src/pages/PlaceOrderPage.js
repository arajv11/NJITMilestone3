import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Store } from '../Store';
import LoadingBox from '../components/LoadingBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ORDER_CREATE_REQUEST':
      return { ...state, loading: true };
    case 'ORDER_CREATE_SUCCESS':
      return { ...state, loading: true };
    case 'ORDER_CREATE_FAIL':
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default function PlaceOrderPage() {
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const round2 = (num) => Math.round(num * 100) / 100; // 123.2345 => 123.23
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.totalPrice = round2(cart.itemsPrice + 5);

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'ORDER_CREATE_REQUEST' });

      const { data } = await axios.post(
        '/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'ORDER_CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: 'ORDER_CREATE_FAIL' });
      toast.error(getError(err));
    }
  };

  return (
    <div>
      <br />
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      <h1 className="my-3">Preview Order</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body className="align-left">
              <h2>Shipping</h2>
              <h5>
                Recipient Name: {cart.shippingAddress.name} <br />
                <br />
                Delivery Address: {cart.shippingAddress.address},
                {cart.shippingAddress.city},{cart.shippingAddress.shippingState}
                ,{cart.shippingAddress.zipCode},{cart.shippingAddress.country}
              </h5>
              <Button
                onClick={() => {
                  navigate('/shipping');
                }}
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <h2>Items</h2>
              <ListGroup variant="flush">
                {cart.cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <span className="max-width">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                      </span>
                      <span className="max-width">
                        <span>{item.name}</span>
                      </span>
                      <span className="max-width">
                        Quantity: {item.quantity}
                      </span>
                      <span className="max-width">Price: ${item.price}</span>
                    </Row>
                  </ListGroup.Item>
                ))}
                <br />
                <br />
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${cart.itemsPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>$5</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Order Total</strong>
                    </Col>
                    <Col>
                      <strong>${cart.totalPrice.toFixed(2)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      className="btn-primary"
                      onClick={placeOrderHandler}
                      disabled={cart.cartItems.length === 0}
                    >
                      Place Order
                    </Button>
                    {loading && <LoadingBox></LoadingBox>}
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

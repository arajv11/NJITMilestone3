import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';

function reducer(state, action) {
  switch (action.type) {
    case 'ORDER_FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'ORDER_FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'ORDER_FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export default function OrderPage() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order, successPay }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      order: {},
      error: '',
      successPay: false,
    }
  );

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'ORDER_FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'ORDER_FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'ORDER_FETCH_FAIL', payload: getError(err) });
      }
    };

    if (!userInfo) {
      return navigate('/login');
    }
    if (!order._id || successPay || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, userInfo, orderId, navigate, successPay]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <br />
      <Helmet>
        <title>Details for order # {orderId}</title>
      </Helmet>
      <h1 className="my-3">Details for order # {orderId}</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body className="align-left">
              <h2>Shipping</h2>
              <h5>
                Recipient Name: {order.shippingAddress.name} <br />
                <br />
                Delivery Address:
                <br />
                {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                {order.shippingAddress.shippingState},{' '}
                {order.shippingAddress.zipCode}, {order.shippingAddress.country}
              </h5>
              <MessageBox variant="success">
                Items will be delivered in 3-5 business days. You will pay upon
                receipt.
              </MessageBox>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <h2>Items</h2>
              <ListGroup variant="flush">
                {order.orderItems.map((item) => (
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
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${order.itemsPrice.toFixed(2)}</Col>
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
                      <strong>${order.totalPrice.toFixed(2)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

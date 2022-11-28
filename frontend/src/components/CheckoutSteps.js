import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Select Items</Col>
      <Col className={props.step2 ? 'active' : ''}>Shipping Address</Col>
      <Col className={props.step3 ? 'active' : ''}>Finalize Order</Col>
    </Row>
  );
}

import React, { useState } from 'react'
import { Button, Col, Row, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/message'
import CheckoutSteps from '../components/checkoutSteps'

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);


  return (
    <>
      <CheckoutSteps step1 step2 step3 step4/>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
             <h2>Shipping</h2>
             <p>
               <strong>Address: </strong>
               {`${cart.shippingAddress.address} ,
                ${cart.shippingAddress.city} ,
                ${cart.shippingAddress.postalCode} ,
                ${cart.shippingAddress.country}`}
             </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Payment Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? 
              <Message>Your cart is empty</Message>
              : 
              <ListGroup variant="flush">
                {cart.cartItems.map((item, index) =>(
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              }
              {cart.paymentMethod}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrder

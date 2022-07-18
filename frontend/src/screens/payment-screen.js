import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import FormContainer from '../components/formContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/checkoutSteps'

const PaymentScreen = ({ history }) => {

  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const dispatch = useDispatch();

  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder')
  }

  return (
    <FormContainer>
    <CheckoutSteps step1 step2 step3/>
    <h1>Payment Method</h1>
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label as="legend">
          Select Method
        </Form.Label>
      <Col>
      <Form.Check 
      type="radio" 
      label="Paypal or Credit Card" 
      id="PayPal" 
      name="paymentMethod" 
      value="PayPal"
      checked
      onChange={(e) => setPaymentMethod(e.target.value)}
      />
      {/* <Form.Check 
      type="radio" 
      label="Stripe" 
      id="Stripe" 
      name="paymentMethod" 
      value="Stripe"
      onChange={(e) => setPaymentMethod(e.target.value)}
      /> */}
      </Col>
      </Form.Group>
      <Button type="submit" variant="primary">Continue</Button>
    </Form>
    </FormContainer>
  )
}


export default PaymentScreen;
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/formContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/checkoutSteps'

const  ShippingScreen = ({ history })  => {

  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address ?? '');
  const [city, setCity] = useState(shippingAddress.city ?? '');
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode ?? '');
  const [country, setCountry] = useState(shippingAddress.country ?? '');
  const dispatch = useDispatch();
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch((saveShippingAddress({
      address,
      city,
      postalCode, 
      country
    })))
    history.push('/payment');
  }

  const getFormLayout = (controlId, name, value,type, placeHolder, onChange) =>  <Form.Group controlId={controlId}>
  <Form.Label>
    {name}
  </Form.Label>
  <Form.Control
    type={type}
    placeholder={placeHolder ?? `Please enter field `}
    value = {value}
    required
    onChange={(e) => onChange(e.target.value)}
  >
  </Form.Control>
</Form.Group>

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={onSubmit}>
      {getFormLayout('address', 'Address', address, 'address', 'Please enter your address', setAddress)}
      {getFormLayout('city', 'City', city, 'city', 'Please enter your city', setCity)}
      {getFormLayout('postalCode', 'Postal Code', postalCode, 'postalCode', 'Please enter your postal code', setPostalCode)}
      {getFormLayout('country', 'Country', country, 'country', 'Please enter your country', setCountry)}
      <Button type="submit" variant="primary">Continue</Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen;

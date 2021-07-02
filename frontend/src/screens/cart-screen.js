import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/message'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id
  const search = location.search

  const qty = search ? Number(search.split("=")[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;
  
  useEffect(() => {
    if (productId)
      dispatch(addToCart(productId, qty))
  }, [dispatch])
  return (
    <div>
      Cart
    </div>
  )
}

export default CartScreen

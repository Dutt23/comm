import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/rating'
import { fetchProduct } from '../actions/productActions'
import { isLoadingHoc } from '../hoc/is-loading-hoc'

const Product = ({ match, setLoading, history }) => {

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productId = match.params.id;

  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, [match.params.id, dispatch])

  useEffect(() => {
    setLoading(loading)
  }, [loading])


  const addToCartHandler = () =>{
     history.push(`/cart/${productId}?qty=${qty}`)
  }


  return (
    <> {product && product.id === match.params.id && (
      <>
        <Link className='btn btn-light my-3' to='/'>
          Go Back
      </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
          </Col>
          <Col md={3}>
            {/* Variant flush takes away side borders */}
            <ListGroup variant='flush' >
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={product.rating}
                  text={`${product.numberOfReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup >
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price :
                </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup >
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status
                </Col>
                  <Col>
                    <strong> {product.countInStock > 0 ? 'In stock' : 'Out of stock'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        onChange={(e) => setQty(e.target.value)}
                        as="select"
                        value={qty}>
                        {
                          [...Array(product.countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))
                        }

                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>

              )}
              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  disabled={product.countInStock === 0}
                  className="btn-block"
                  type="button">
                  Add To Cart
              </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </>
    )}

    </>
  )
}


export default isLoadingHoc(Product, "Loading your data")
import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import Rating from './rating'
import { Link } from 'react-router-dom'
const Product = ({ product }) => {
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`/product/${product.id}`}>
				<Card.Img variant="top" src={product.image} />
				</Link>
			<Card.Body>
				<Link to={`/product/${product.id}`}>
					<Card.Title as="div">
						<strong>
							{product.name}
						</strong>
					</Card.Title>
				</Link>
				<Card.Text as ="div">
					<div className = "my-3">
						<Rating 
						 key={product.id}
						 rating={product.rating}
						 text={`${product.rating} rating from ${product.numberOfReviews} reviews`}
						 color={"#f8e825"}
						/>
					</div>
				</Card.Text>
				<Card.Text as="h3"> 
				${product.price}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Product

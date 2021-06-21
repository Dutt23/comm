import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import Rating from './rating'
const Product = ({ product }) => {
	return (
		<Card className="my-3 p-3 rounded">
				<Card.Img variant="top" src={product.image} />
			<Card.Body>
				<a href={`/products/${product.id}`}>
					<Card.Title as="div">
						<strong>
							{product.name}
						</strong>
					</Card.Title>
				</a>
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

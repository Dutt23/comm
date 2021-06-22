import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/product'
import axios from 'axios'
function Home() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetchProducts()
	}, [])

	const fetchProducts =  async () => {
		const { data } = await axios.get('/api/products')
		setProducts(data)
	}
	return (
		<div>
			<h1> Latest products</h1>
			<Row className="d-flex align-items-stretch">
				{products.map(product => (
					<Col key={product.id} className="py-3" sm={12} md={6} lg={4} xl={3}>
						<Product
							product={product}
						/>
					</Col>
				))}
			</Row>
		</div>
	)
}

export default Home

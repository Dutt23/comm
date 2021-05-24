import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/product'
function Home() {
    return (
        <div>
            <h1> Latest products</h1>
						<Row className="d-flex align-items-stretch">
							{products.map(product =>(
								<Col key={product.id} className="py-3" sm={12} md={6} lg={4} xl={3}>
								 <Product 
								   product ={product}
								 />
								</Col>
							))}
						</Row>
        </div>
    )
}

export default Home

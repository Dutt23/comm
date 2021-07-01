import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/loader'	
import Message from '../components/message'	
import { isLoadingHoc } from '../hoc/is-loading-hoc'
const Home = props => {

	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)
	const { loading, error, products } = productList;
	const { setLoading } = props;
	
	useEffect(() => {
		dispatch(listProducts())

	}, [dispatch])

	useEffect(() => {
		setLoading(loading)
	}, [loading])

	return (
		<>
			<h1> Latest products</h1>
			{error ? <Message variant="danger">{error}</Message> :
				(<Row className="d-flex align-items-stretch">
					{products.map(product => (
						<Col key={product.id} className="py-3" sm={12} md={6} lg={4} xl={3}>
							<Product
								product={product}
							/>
						</Col>
					))}
				</Row>)
			}
		</>
	)
}

export default isLoadingHoc(Home, "Component is loading")

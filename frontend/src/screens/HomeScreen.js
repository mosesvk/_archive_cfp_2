import React from 'react'
import products from '../products'
import { Row, Col, Image } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
            <Image src={product.image} alt='product-img' thumbnail/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen

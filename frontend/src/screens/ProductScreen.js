import React from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({match}) => {
  const product = products.find((p) => p._id == match.params.id)
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Back to Home</Link>
      <p>{product.name}</p>
    </div>
  )
}

export default ProductScreen

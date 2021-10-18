import React, { useState, useEffect } from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import logoImg from '../images/cfp-cover-1.png'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'

const Sweet = ({ history }) => {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages } = productList

  let keyword = history.location.search

  useEffect(() => {
      dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  let sweetProducts = products.filter(elem => elem.category == 'sweet')

  return (
    <Container className='sweet-container'>
      <Row>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        {/* <Col md={4}>
          <Image src={logoImg} className='logo-img'/>
        </Col> */}
        <Col md={6}>
          <h1>Sweet Flavors</h1>
        </Col>
      </Row>

      {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row className='justify-center'>
                            {sweetProducts.map(product => (
                              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
      }
    </Container>
  )
}

export default Sweet

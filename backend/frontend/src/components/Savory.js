import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import logoImg from '../images/cfp-cover-1.png'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'

const Savory = ({history}) => {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages } = productList

  let keyword = history.location.search

  useEffect(() => {
      dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  let savoryProducts = products.filter(elem => elem.category == 'savory')

  return (
    <Container className='savory-container'>
      <Row>
        <Col md={4}>
          <Image src={logoImg} className='logo-img'/>
        </Col>
        <Col md={3}>
          <h1>Savory Flavors</h1>
          <p>Try our Savory Fried Pies</p>
        </Col>
      </Row>
      {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {savoryProducts.map(product => (
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

export default Savory

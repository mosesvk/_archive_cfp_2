import React, {useEffect} from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'

import logoImg from '../images/cfp-cover-1.png'

const Pizza = ({history}) => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages } = productList

  let keyword = history.location.search

  useEffect(() => {
    dispatch(listProducts(keyword))
}, [dispatch, keyword])

  let pizzaProducts = products.filter(elem => elem.category === 'pizza')

  return (
    <Container className='pizza-container'>
      <Row>
        <Link to='/' className='go-back btn btn-light '>Go Back</Link>
        <Col md={4}>
          <h1>Pizza Puffs!</h1>
          <p>Try our new Fried Pizza Puffs</p>
        </Col>
      </Row>

      {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row className='justify-center'>
                            {pizzaProducts.map(product => (
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

export default Pizza


import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoImg from '../images/cfp-cover-1.png'

const Pizza = () => {
  return (
    <Container className='pizza-container'>
      <Row>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        <Col md={4}>
          <Image src={logoImg} className='logo-img'/>
        </Col>
        <Col md={3}>
          <h1>Pizza Puffs!</h1>
          <p>Try our new Fried Pizza Puffs</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Pizza


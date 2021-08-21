import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import logoImg from '../images/cfp-cover-1.png'

const Savory = () => {
  return (
    <Container className='savory-container'>
      <Row>
        <Col md={4}>
          <Image src={logoImg} className='logo-img'/>
        </Col>
        <Col md={3}>
          <h1>Savory Flavors</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Savory

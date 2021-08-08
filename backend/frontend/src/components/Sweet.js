import React from 'react'
import { Container, Image } from 'react-bootstrap'
import logoImg from '../images/cfp-cover-1.png'

const Sweet = () => {
  return (
    <Container className='sweet-container'>
      <Image src={logoImg} className='logo-img'/>
    </Container>
  )
}

export default Sweet

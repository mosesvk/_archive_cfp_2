import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" className='px-5'>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className='nav'>Cheefa's Fried Pies</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to='/cart'>
                <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              </LinkContainer>
              
              <LinkContainer to='/login'>
                <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Pie Flavors" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Sweet Fried Pies</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Savory Fried Pies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Pizza Puffs</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </header>
  )
}

export default Header

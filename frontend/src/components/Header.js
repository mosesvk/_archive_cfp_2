import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" className='px-5'>
        <Container>
          <Navbar.Brand href="/">Cheefa's Fried Pies</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'></i>Login</Nav.Link>
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

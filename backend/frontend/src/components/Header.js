import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = ({history}) => {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar 
        variant='dark' 
        expand="lg" 
        className='nav'
      >
        <Container className='container'>
          <LinkContainer to="/">
            <Navbar.Brand id='nav-logo'>Cheefa's Fried Pies</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <SearchBox />
            <Nav
              // className='ml-auto'
              className="ml-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to='/cart'>
                <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown 
                  title={`${userInfo.name}`} 
                  id='username' 
                  className='username-menu'
                >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
                </LinkContainer>
              )}
            
              <NavDropdown title="Menu" id="navbarScrollingDropdown">
                <NavDropdown.Item href='#sweetflavors'>Sweet flavors</NavDropdown.Item>
                <NavDropdown.Item href="#savoryflavors">Savory flavors</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#pizza">Pizza Puffs</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </header>
  )
}

export default Header



                  /* {userInfo && userInfo.isAdmin && (
                    <NavDropdown title='Admin' variant='light' style={{color: 'black'}}>
                      <LinkContainer to='/admin/userlist'>
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to='/admin/productlist'>
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to='/admin/orderlist'>
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>

                    </NavDropdown>
                  )} */
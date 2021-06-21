import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>E Commerce</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/cart">
              <Nav.Link > <i className="fas fa-shopping-cart"></i>Card</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

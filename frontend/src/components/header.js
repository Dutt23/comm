import React from 'react'
import { Form, FormControl, NavDropdown, Nav, Navbar, Button, Container} from 'react-bootstrap'
function Header() {
	return (
<Navbar bg="dark" variant="dark" expand="lg">
	<Container>
  <Navbar.Brand href="/">E Commerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/cart"> <i className="fas fa-shopping-cart"></i>Card</Nav.Link>
      <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
	</Container>
</Navbar>
	)
}

export default Header

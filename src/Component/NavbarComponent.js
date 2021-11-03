import React, { useContext } from "react"
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";


function NavbarComponent() {
  // context for card length
  const context = useContext(ProductContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand >Let's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/allproduct">All Products</Nav.Link>
            <Nav.Link as={Link} to="/electronics">Electronics</Nav.Link>
            <Nav.Link as={Link} to="/fancyItems">Fancy</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/card"> <Button variant="outline-dark"><i className="fas fa-shopping-cart"></i>
              <span>  Cart</span>  <Badge pill bg="secondary">{context.carditem.length}</Badge>
            </Button></Nav.Link>
            <Nav.Link as={Link} to="/orderedproduct"> <Button variant="outline-dark"><i className="fas fa-shopping-bag"></i>
              <span>  My Orders</span>
            </Button></Nav.Link>
            <Nav.Link as={Link} to="/"> <Button variant="outline-dark" onClick={() => { localStorage.clear() }}><i className="fas fa-sign-out-alt"></i>
              <span>  Sign Out</span>
            </Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default NavbarComponent;
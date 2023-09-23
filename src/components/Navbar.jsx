import {Navbar, Nav, Container} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function App () {
  return (
    <>
      <Navbar expand="lg" bg="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <ion-icon name="fast-food"></ion-icon>MenuRest
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="#">Contacto</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
              <Button className="btn-carrito" variant="primary">
                <div className="btn-icon">
                  <ion-icon name="cart" className="carrito-icon"></ion-icon>
                  <Badge bg="secondary">9</Badge>
                </div>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default App
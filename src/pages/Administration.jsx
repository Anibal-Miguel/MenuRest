import {Navbar, Nav, Container} from "react-bootstrap";
//import Badge from 'react-bootstrap/Badge';
//import Button from 'react-bootstrap/Button';

function App () {
  return (
    <>
      <Navbar expand="lg" bg="dark" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
            <Nav.Link href="/Customer">Clientes</Nav.Link>
              <Nav.Link href="/Delfood">Comida</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default App
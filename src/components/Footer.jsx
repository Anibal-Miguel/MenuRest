import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <div className="footer">
      <div className="justify-content-center bg-dark">
        <h3 className="footer_title">
          <ion-icon name="fast-food"></ion-icon>MenuRest
        </h3>
      </div>
      <Nav className="justify-content-center bg-dark" activeKey="/home">
        <Nav.Item>
          <div className="line"></div>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-1">
            <ion-icon name="logo-instagram"></ion-icon>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <ion-icon name="logo-facebook"></ion-icon>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <div className="line"></div>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-2 mb-4">Todos los derechos reservados</p>
    </div>
  );
}

export default Footer
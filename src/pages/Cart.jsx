import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

function Carrito() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Carrito de compras</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí puedes iterar sobre los productos en el carrito y mostrar cada uno en una fila de la tabla */}
              {/* Puedes usar un map para recorrer los productos y crear una fila de la tabla para cada uno */}
            </tbody>
          </Table>
          <Button variant="danger">Vaciar carrito</Button>
          <Button variant="success">Realizar compra</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Carrito;

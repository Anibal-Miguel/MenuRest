import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Modal, Form } from "react-bootstrap";


function Customer() {
    const [Customer, setCustomer] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
  
    const agregarCliente = () => {
      const nuevoCliente = {
        nombre: nombre,
        email: email,
      };
      setCustomer([...Customer, nuevoCliente]);
      setShowModal(false);
      setNombre("");
      setEmail("");
    };
  
    const eliminarCliente = (index) => {
      const nuevosCustomer = [...Customer];
      nuevosCustomer.splice(index, 1);
      setCustomer(nuevosCustomer);
    };
  
    return (
      <Container>
        <Row>
          <Col>
            <h1>Administración de Clientes</h1>
            {/*<Button variant="primary" onClick={() => setShowModal(true)}>Borrar Cliente</Button>*/}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {Customer.map((cliente, index) => (
                  <tr key={index}>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.email}</td>
                    <td>
                      <Button variant="danger" onClick={() => eliminarCliente(index)}>Eliminar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Desea Borrar al Cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
            <Button variant="primary" onClick={agregarCliente}>Borrar</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
  
  export default Customer;
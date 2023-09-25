// import { Container } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Nav from "react-bootstrap/Nav";
// import Button from 'react-bootstrap/Button';


// function Bebidas() {
//   return (
//     <Container>
//       <Card>
//         <Card.Header>
//           <Nav variant="tabs" defaultActiveKey="#first">
//             <Nav.Item>
//               <Nav.Link href="#first" className="title-menu">
//                 Comidas
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link href="#second" className="title-menu">
//                 Bebidas
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link href="#third" className="title-menu">
//                 Postres
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Card.Header>

//         <Card.Body>
//           <CardGroup>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//                 />
//               <Card.Body>
//                 <Card.Title>CLASSIC BURGUERS</Card.Title>
//                 <Card.Text>
//                   This is a wider card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </Card.Text>
                
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>SANDWICH LOMO</Card.Title>
//                 <Card.Text>
//                   This card has supporting text below as a natural lead-in to
//                   additional content.{" "}
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//               <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This is a wider card with supporting text below as a natural
//                   lead-in to additional content. This card has even longer
//                   content than the first to show that equal height action.
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//               <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>
//           </CardGroup>
//           <CardGroup>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This is a wider card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This card has supporting text below as a natural lead-in to
//                   additional content.{" "}
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Churrasco de ternera a la parrilla</Card.Title>
//                 <Card.Text>
//                   This is a wider card with supporting text below as a natural
//                   lead-in to additional content. This card has even longer
//                   content than the first to show that equal height action.
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>
//           </CardGroup>
//           <CardGroup>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Hamburguesa con pan negro</Card.Title>
//                 <Card.Text>
//                   This is a wider card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>

//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Smash Burger</Card.Title>
//                 <Card.Text>
//                   This card has supporting text below as a natural lead-in to
//                   additional content.{" "}
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>

//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Hamburguesa Vegana</Card.Title>
//                 <Card.Text>
//                   This is a wider card with supporting text below as a natural
//                   lead-in to additional content. This card has even longer
//                   content than the firsst to show that equal height action.
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>
//           </CardGroup>
//           <CardGroup>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This is a wider card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>

//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This card has supporting text below as a natural lead-in to
//                   additional content.{" "}
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>

//             <Card>
//               <Card.Img
//                 variant="top"
//                 src=""
//               />
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This is a wider card with supporting text below as a natural
//                   lead-in to additional content. This card has even longer
//                   content than the first to show that equal height action.
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
//               </Card.Footer>
//             </Card>
//           </CardGroup>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// export default Bebidas
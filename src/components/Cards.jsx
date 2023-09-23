import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';


function Cards() {
  return (
    <Container>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#comidas" className="title-menu">
                Comidas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#bebidas" className="title-menu">
                Bebidas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#postres" className="title-menu">
                Postres
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://sandwicherialafabrica.cl/wp-content/uploads/2022/07/La-Fabrica-promo-4.jpg"
              />
              <Card.Body>
                <Card.Title>CLASSIC BURGUERS</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://sandwicherialafabrica.cl/wp-content/uploads/2022/07/La-Fabrica-Banner-Promo-sandwich-2.jpg"
              />
              <Card.Body>
                <Card.Title>SANDWICH LOMO</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://sandwicherialafabrica.cl/wp-content/uploads/2022/07/La-Fabrica-promo-1.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://sandwicherialafabrica.cl/wp-content/uploads/2022/07/La-Fabrica-Banner-Promo-sandwich-5r.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://tipsparatuviaje.com/wp-content/uploads/2019/12/empanadas-cordobesas.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://recetinas.com/wp-content/uploads/2023/08/churrasco-de-ternera-a-la-parrilla.jpg.webp"
              />
              <Card.Body>
                <Card.Title>Churrasco de ternera a la parrilla</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://recetinas.com/wp-content/uploads/2023/03/Hamburguesa-con-pan-negro.jpg.webp"
              />
              <Card.Body>
                <Card.Title>Hamburguesa con pan negro</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://recetinas.com/wp-content/uploads/2023/02/smash-burger.jpg.webp"
              />
              <Card.Body>
                <Card.Title>Smash Burger</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://recetinas.com/wp-content/uploads/2017/09/hamburguesa-vegana.jpg.webp"
              />
              <Card.Body>
                <Card.Title>Hamburguesa Vegana</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the firsst to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.bsas-catering.com.ar/documentos/1/51_pizza-variedades%20(2).jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://recetinas.com/wp-content/uploads/2017/09/pizza-de-chorizo.jpg.webp"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://recetinas.com/wp-content/uploads/2023/08/pinsa-romana.jpg.webp"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">U$D 10,00</small> <Button variant="link" className="btn-pedir"> Pedir </Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cards
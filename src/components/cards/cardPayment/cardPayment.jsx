import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function CardPayment(props) {
  const { payment } = props;
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> 3. Metode Pembayaran </p>
          <hr />
        </blockquote>
        <br />
        <Container fluid>
          {payment &&
            payment.map((p) => (
              <Row className="g-4 py-2">
                <Col xs={4} md={4}>
                  <Card.Img variant="top" src={`https://servertopupgame.azrayaal.space/${p.picture}`} className="rounded" />
                </Col>
                <Col xs={6} md={6}>
                  <Button className="px-5 pt-2" variant="primary mx-3 mb-3">
                    {p.bank_name}
                  </Button>
                </Col>
                <hr />
              </Row>
            ))}
        </Container>
      </Card.Body>
    </Card>
  );
}

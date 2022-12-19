import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
                <Col xs={12} md={12}>
                  <div class="input-container " id={p.id} key={p.id}>
                    <input id="payment" name="payment" value={p.id} type="radio" />
                    <div class="radio-tile">
                      <label for="walk"> {p.bank_name}</label>
                    </div>
                  </div>
                </Col>
                <hr />
              </Row>
            ))}
        </Container>
      </Card.Body>
    </Card>
  );
}

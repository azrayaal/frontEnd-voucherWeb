import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function CardPayment() {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> 3. Metode Pembayaran </p>
        </blockquote>
        <br />
        <Container fluid>
          <hr />
          <Row className="g-4 py-2">
            <Col xs={4} md={4}>
              <h3 className="px-auto pt-2">LOGOO</h3>
            </Col>
            <Col xs={8} md={8} className="d-grid">
              <Button variant="primary">Block level button</Button>
            </Col>
          </Row>
          <hr />
          <Row className="g-4 py-2">
            <Col xs={4} md={4}>
              <h3 className="px-auto pt-2">LOGOO</h3>
            </Col>
            <Col xs={8} md={8} className="d-grid">
              <Button variant="primary">Block level button</Button>
            </Col>
          </Row>
          <hr />
          <Row className="g-4 py-2">
            <Col xs={4} md={4}>
              <h3 className="px-auto pt-2">LOGOO</h3>
            </Col>
            <Col xs={8} md={8} className="d-grid">
              <Button variant="primary">Block level button</Button>
            </Col>
          </Row>
          <hr />
          <Row className="g-4 py-2">
            <Col xs={4} md={4}>
              <h3 className="px-auto pt-2">LOGOO</h3>
            </Col>
            <Col xs={8} md={8} className="d-grid">
              <Button variant="primary">Block level button</Button>
            </Col>
          </Row>
          <hr />
        </Container>
      </Card.Body>
    </Card>
  );
}

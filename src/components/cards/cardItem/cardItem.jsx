import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function CardItem() {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> 2. Pilih Item </p>
        </blockquote>
        <br />
        <Container fluid>
          <Row xs={2} md={3} className="g-3">
            <Col>
              <Button className="px-5 pt-2">V 120 Points</Button>
            </Col>
            <Col>
              <Button className="px-5 pt-2">V 120 Points</Button>
            </Col>
            <Col>
              <Button className="px-5 pt-2">V 120 Points</Button>
            </Col>
            <Col>
              <Button className="px-5 pt-2">V 120 Points</Button>
            </Col>
            <Col>
              <Button className="px-5 pt-2">V 120 Points</Button>
            </Col>
            <Col>
              <Button className="px-5 pt-2">V 120 Points</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function CardItem(props) {
  // console.log(props);
  const { item } = props;
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> 2. Pilih Item </p>
        </blockquote>
        <br />
        <Container fluid>
          <Row className="g-3">
            {item.map((i) => (
              <Col xs={12} md={6}>
                <Button coins={i.coins} className="px-5 pt-2">
                  {i.jumlahCoin} {i.jenisCoin} - {i.hargaCoin}
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

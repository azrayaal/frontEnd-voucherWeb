import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

import { NumericFormat } from 'react-number-format';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import './cardItem.css';

export default function CardItem(props) {
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
                <div class="input-container " coins={i.coins} id={i.id} key={i.id}>
                  <input id="coin" value={i.id} type="radio" name="radio" />
                  <div class="radio-tile">
                    <div className="itemcoin">
                      {i.jumlahCoin} {i.jenisCoin}{' '}
                    </div>
                    <label for="walk">
                      {' '}
                      <NumericFormat value={i.hargaCoin} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
                    </label>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CardPayment(props) {
  const { bank_name, id, onChange } = props;
  return (
    <Row className="g-4 py-2">
      <Col xs={12} md={12}>
        <div class="input-container " id={id} key={id} onChange={onChange}>
          <input id="payment" name="payment" value={id} type="radio" />
          <div class="radio-tile">
            <label for="walk"> {bank_name}</label>
          </div>
        </div>
      </Col>
      <hr />
    </Row>
  );
}

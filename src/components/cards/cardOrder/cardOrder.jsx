import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function CardOrder() {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> 1. Masukkan Pesanan </p>
        </blockquote>
        <Form className="d-flex pt-3">
          <Form.Control type="search" placeholder="Masukkan Email:" className="me-2" aria-label="Search" />
        </Form>
      </Card.Body>
      <Button variant="primary mx-3 mb-3">Beli</Button>
    </Card>
  );
}

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function CardId() {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> 1. Masukkan Tujuan </p>
        </blockquote>
        <br />
        <span>
          Catatan: Untuk menemukan ID Game Anda, silakan login ke akun dan salin User ID+Tag menggunakan tombol yang tersedia disamping Riot ID. Contoh: Westbourne#SEA.<cite title="Source Title">Source Title</cite>
        </span>
        <Form className="d-flex pt-3">
          <Form.Control type="search" placeholder="Nomor / ID / Nickname" className="me-2" aria-label="Search" />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
      </Card.Body>
    </Card>
  );
}

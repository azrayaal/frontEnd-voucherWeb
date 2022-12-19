import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

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
          <input type="text" class="form-control" placeholder="Nomor / ID / Nickname" aria-label="Nomor / ID / Nickname" aria-describedby="basic-addon2" />
        </Form>
      </Card.Body>
    </Card>
  );
}

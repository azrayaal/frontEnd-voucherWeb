import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRoutes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardItem from '../cards/cardItem/cardItem';
import CardPayment from '../cards/cardPayment/cardPayment';

export default function Topupform(props) {
  const { payment, item } = props;

  const [verifyID, setVerifyID] = useState('');
  const [verifyEmail, setVerifyEmail] = useState('');
  const [coinItem, setCoinItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});

  //   const router = useRoutes();

  const onCoinItemChange = (data) => {
    setCoinItem(data);
  };

  const onPaymentItemChange = (data) => {
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (verifyID === '' || verifyEmail === '' || coinItem === '' || paymentItem === '') {
      toast.error('Tidak boleh ada yang kosong', {
        theme: 'colored',
      });
    } else {
      const data = {
        verifyID,
        verifyEmail,
        coinItem,
        paymentItem,
      };
      localStorage.setItem('checkout-item', JSON.stringify(data));
      console.log('dataperoleh', data);
    }
  };

  return (
    <form action="">
      <Card>
        <ToastContainer />
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> 1. Masukkan Tujuan </p>
          </blockquote>
          <br />
          <span>
            Catatan: Untuk menemukan ID Game Anda, silakan login ke akun dan salin User ID+Tag menggunakan tombol yang tersedia disamping Riot ID. Contoh: Westbourne#SEA.<cite title="Source Title">Source Title</cite>
          </span>
          <Form className="d-flex pt-3">
            <input type="text" class="form-control" placeholder="Nomor / ID / Nickname" aria-label="Nomor / ID / Nickname" aria-describedby="basic-addon2" value={verifyID} onChange={(event) => setVerifyID(event.target.value)} />
          </Form>
        </Card.Body>
      </Card>
      <br />

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
                  <CardItem item={i.item} id={i.id} jumlahCoin={i.jumlahCoin} jenisCoin={i.jenisCoin} hargaCoin={i.hargaCoin} key={i.id} onChange={() => onCoinItemChange(i)} />
                </Col>
              ))}
            </Row>
          </Container>
        </Card.Body>
      </Card>

      <br />
      <Card>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> 3. Metode Pembayaran </p>
            <hr />
          </blockquote>
          <br />
          <Container fluid>{payment && payment.map((p) => <CardPayment payment={payment} onChange={() => onPaymentItemChange(p)} bank_name={p.bank_name} id={p.id} key={p.id} />)}</Container>
        </Card.Body>
      </Card>
      <br />

      <Card>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> 4. Masukkan Email </p>
          </blockquote>
          <Form className="d-flex pt-3">
            <Form.Control type="search" placeholder="Masukkan Email:" className="me-2" aria-label="Search" value={verifyEmail} onChange={(event) => setVerifyEmail(event.target.value)} />
          </Form>
        </Card.Body>
        <a href="/checkout" className="btn btn-primary mx-3 mb-4" onClick={onSubmit}>
          Beli
        </a>
      </Card>
    </form>
  );
}

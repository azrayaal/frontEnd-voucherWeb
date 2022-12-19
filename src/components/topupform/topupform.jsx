import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import { useRoutes } from 'react-router-dom';
import CardItem from '../cards/cardItem/cardItem';
import CardPayment from '../cards/cardPayment/cardPayment';

export default function Topupform(props) {
  const { payment, item } = props;

  const [verifyID, setVerifyID] = useState('');
  const [verifyEmail, setVerifyEmail] = useState('');

  //   const router = useRoutes();

  const onSubmit = () => {
    if (verifyID === '' || verifyEmail === '') {
      toast.error('Tidak boleh ada yang kosong', {
        theme: 'colored',
      });
    } else {
      const data = {
        verifyID,
        verifyEmail,
        // bankAccountName,
        // paymentItem,
        // nominalItem,
      };
      localStorage.setItem('checkout-item', JSON.stringify(data));
      console.log('dataperoleh', data);
      //   router.push('/checkout');
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
      <CardItem item={item} />
      <br />
      <CardPayment payment={payment} />
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
        <Button variant="primary mx-3 mb-3" onClick={onSubmit}>
          Beli
        </Button>
      </Card>
    </form>
  );
}

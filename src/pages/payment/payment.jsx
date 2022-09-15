import { React, useEffect, useState } from 'react';
import CardId from '../../components/cards/cardId/cardId';
import Card from 'react-bootstrap/Card';
import NavbarReal from '../../components/navbar/navbar';
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardItem from '../../components/cards/cardItem/cardItem';
import Footer from '../../components/footer/footer';
import CardPayment from '../../components/cards/cardPayment/cardPayment';
import CardOrder from '../../components/cards/cardOrder/cardOrder';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Payment() {
  const [desc, setDesc] = useState('');
  const [picture, setPicture] = useState('');
  const [payment, setPayment] = useState('');
  const [item, setItems] = useState([]);
  // const [dataItem, setDataItem] = useState('');

  const { id } = useParams();
  const CARD_API = 'http://localhost:4000/voucher/getall';
  const fetchData = async (id) => {
    if (id) {
      axios.get(`${CARD_API}/` + id).then((response) => {
        const { data } = response;
        setDesc(data.desc);
        setPicture(data.picture);
        setItems(data.coins);
        setPayment(data.payment);
        console.log('dta=>', response.data);
      });
    }
  };

  useEffect(
    (data) => {
      fetchData(id);
    },
    [id]
  );

  return (
    <>
      <NavbarReal />
      <Container className="py-5">
        <Row className="g-3">
          <Col sm={1} md={4}>
            <Card.Img variant="top" src={`http://localhost:4000/${picture}`} className="rounded pb-3" />
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{desc}</p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={1} md={8}>
            <CardId />
            <br />
            <CardItem item={item} />
            <br />
            <CardPayment payment={payment} />
            <br />
            <CardOrder />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

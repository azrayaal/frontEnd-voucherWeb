import { React, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardId from '../../components/cards/cardId/cardId';

import { useCallback } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import CardItem from '../../components/cards/cardItem/cardItem';
import CardOrder from '../../components/cards/cardOrder/cardOrder';
import CardPayment from '../../components/cards/cardPayment/cardPayment';
import { getDetaivoucher } from '../../services/pages';
import Topupform from '../../components/topupform/topupform';

export default function Payment() {
  const [desc, setDesc] = useState('');
  const [picture, setPicture] = useState('');
  const [payment, setPayment] = useState('');
  const [item, setItems] = useState([]);

  const { id } = useParams();

  const fetchdataDetail = useCallback(async (id) => {
    const response = await getDetaivoucher(id);
    setDesc(response.desc);
    setPicture(response.picture);
    setItems(response.coins);
    setPayment(response.payment);
    console.log('dat dari callback=>', response);
    localStorage.setItem('data-item', JSON.stringify(response));
  }, []);

  useEffect(() => {
    fetchdataDetail(id);
  }, []);

  const IMG = process.env.ROOT_IMG;

  return (
    <>
      <Container className="py-5">
        <Row className="g-3">
          <Col sm={1} md={4}>
            <Card.Img variant="top" src={`${IMG}/${picture}`} className="rounded pb-3" />
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{desc}</p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={1} md={8}>
            <Topupform item={item} payment={payment} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

import React from 'react';
import CardId from '../../components/cards/cardId/cardId';
import Card from 'react-bootstrap/Card';
import NavbarReal from '../../components/navbar/navbar';
import { Container } from 'react-bootstrap';

import GambarKartu from '../../image/valo.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardItem from '../../components/cards/cardItem/cardItem';
import Footer from '../../components/footer/footer';
import CardPayment from '../../components/cards/cardPayment/cardPayment';
import CardOrder from '../../components/cards/cardOrder/cardOrder';

export default function Payment() {
  return (
    <>
      <NavbarReal />
      <Container className="py-5">
        <Row className="g-3">
          <Col sm={1} md={4}>
            <Card.Img variant="top" src={GambarKartu} className="rounded" />
          </Col>
          <Col sm={1} md={8}>
            <CardId />
          </Col>
        </Row>
        <Row className="g-3">
          <Col sm={1} md={4}>
            <CardId />
          </Col>
          <Col sm={1} md={8}>
            <CardItem />
          </Col>
          <Col sm={1} md={8}>
            <CardPayment />
          </Col>
          <Col sm={1} md={8}>
            <CardOrder />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

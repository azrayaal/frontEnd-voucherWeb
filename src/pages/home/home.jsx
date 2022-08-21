import React from 'react';
import { Container } from 'react-bootstrap';
import Carosel from '../../components/carousel/carousel';
import NavbarReal from '../../components/navbar/navbar';
import './home.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Kartu from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <NavbarReal />
      <Carosel />
      <Container>
        <div className="py-3">
          <Container className="bg-cerah py-4 rounded-4">
            <h3>Games</h3>
            <Row xs={3} md={6} className="g-3">
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
              <Col>
                <Link to="/payment">
                  <Kartu />
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <Footer className="pt-2" />
    </div>
  );
}

import React from 'react';
import { Container } from 'react-bootstrap';
import Carosel from '../../components/carousel/carousel';
import NavbarReal from '../../components/navbar/navbar';
import './home.css';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Kartu from '../../components/cards/cards';

export default function Home() {
  const CARD_API = 'http://localhost:4000/voucher/getall';

  const [thumbnail, setTuhmbnail] = useState([]);

  const fetchGambar = async () => {
    const { data } = await axios.get(CARD_API).then((response) => {
      // console.log('data =>', response.data);
      setTuhmbnail(response.data);
    });
  };

  useEffect(() => {
    fetchGambar();
  }, []);

  return (
    <div>
      <NavbarReal />
      <Carosel />
      <Container style={{ marginBottom: '96px' }}>
        <div className="py-3">
          <Container className="bg-cerah py-4 rounded-4">
            <h3 style={{ color: '#FF2768' }}>Games</h3>
            <Row xs={3} md={6} className="g-3">
              {thumbnail &&
                thumbnail.map((t) => (
                  <Col>
                    <Link to={`/payment/${t.id}`} picture={t.picture}>
                      <Kartu key={t.id} id={t.id} picture={t.picture} />
                    </Link>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

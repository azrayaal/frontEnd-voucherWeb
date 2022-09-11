import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

export default function CardItem() {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> 2. Pilih Item </p>
        </blockquote>
        <br />
        <Container fluid>
          <Row xs={2} md={3} className="g-3">
            {/* {item.map((i) => (
              <Col>
                <Button className="px-5 pt-2" jenis_coin={item}>
                  {i.item}
                </Button>
              </Col>
            ))} */}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

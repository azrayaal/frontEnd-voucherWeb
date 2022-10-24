import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Kartu(props) {
  const { id, picture } = props;
  return (
    <Card id="Games">
      {/* <Card.Img id={id} variant="top" src={`http://localhost:4000/${picture}`} className="rounded" /> */}
      <Card.Img id={id} variant="top" src={`https://servertopupgame.azrayaal.space/${picture}`} className="rounded" />
      {/* <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> */}
    </Card>
  );
}

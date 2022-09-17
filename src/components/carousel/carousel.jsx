import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import Crs1 from '../../image/crs1.jpg';
import Crs2 from '../../image/crs2.png';
import Crs3 from '../../image/crs3.jpg';

export default function Carosel() {
  return (
    <Container className="py-3">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 rounded" src={Crs1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 rounded" src={Crs2} alt="Second slide" />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 rounded" src={Crs3} alt="Third slide" />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

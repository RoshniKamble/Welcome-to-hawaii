import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Security.css'
import Carousel from 'react-bootstrap/Carousel';
import CardIns from '../../card/CardIns';
import CardGroup from 'react-bootstrap/CardGroup';
import { Fade } from "react-awesome-reveal";

function Insurance() {

  const [iconSize, setIconSize] = useState(120);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 768 ? setIconSize(130) : setIconSize(100);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // alterar o tamanho do react-icon


  return (
    <Container className='container-ins' fluid>
      <Fade duration={2500}>
        <Row className='SndRow'>
          <div className="title">
            <h3 className='SndRow-title'>Highlights</h3>
          </div>
          <Carousel variant="dark" className='SndRow-carousel'>
            <Carousel.Item className='SndRow-card'>
              <CardGroup className='SndRow-CG'>
                <CardIns src="assets/rec1.jpg" titulo="Surfing" texto="Best Hawaiian islands for surfing." />
                <CardIns src="assets/rec2.jpg" titulo="Hula" texto="Try it yourself." />
                <CardIns src="assets/rec3.jpg" titulo="Vulcanoes" texto="Volcanic conditions can change at any time." />
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Fade>
    </Container>
  );
}

export default Insurance;
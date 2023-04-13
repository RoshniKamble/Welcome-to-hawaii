import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from 'react-icons/fa';
import './Contact.css'

function Contact() {
  return (
    <Container fluid contact className='contact-container' style={{ backgroundColor: "#E6F2F2')" }} >
      <Row>
        <Col>
          <div className="title">
            <h3 className='SndRow-title'>Catergories</h3>
          </div>
          <div className="d-grid gap-2 conbtn">
            <Button variant="light" size="md">
              Adventure
                    <span><a href="#" className='btn-arrow'><FaArrowRight /></a></span>
            </Button>
            <Button variant="light" size="md">
              Culinary <span><a href="#" className='btn-arrow'><FaArrowRight /></a></span>
            </Button>
            <Button variant="light" size="md">
              Eco-tourism <span><a href="#" className='btn-arrow'><FaArrowRight /></a></span>
            </Button>
            <Button variant="light" size="md">
              Family <span><a href="#" className='btn-arrow'><FaArrowRight /></a></span>
            </Button>
            <Button variant="light" size="md">
              Sport <span><a href="#" className='btn-arrow'><FaArrowRight /></a></span>
            </Button>
          </div>
        </Col>
        <Col>
          <div className="title">
            <h3 className='SndRow-title'>Travel Guide</h3>
              <div className="card guide-card mt-3">
                    <div className="right-h">
                        <div className="">
                            <h5 className="card-title">Hadwin Malone</h5>
                            <p className="card-text">
                            Guide since 2012
                            </p>
                            <Button variant="outline-success">Success</Button>
                        </div>
                    </div>
                    <div className="left-h">
                        <img src="assets/guide-img.jpg" className="guide-img" alt="..." />
                    </div>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
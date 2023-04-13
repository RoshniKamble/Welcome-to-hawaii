import Card from 'react-bootstrap/Card';
import "./CardIns.css";
import { FaArrowRight } from 'react-icons/fa';

function CardIns(props) {
    return (
        <Card className='card-container'>
            <Card.Img className='card-img' src={props.src} />
            <Card.Body className='card-body'>
                <Card.Title className='card-title'>{props.titulo}</Card.Title>
                <Card.Text className='card-text'>
                    {props.texto}
                </Card.Text>
                <div className='card-arrow'>
                    <a href="#" className='arrow'><FaArrowRight /></a>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardIns
    

import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from '../ModalMovie/ModalMovie';
import './Movie.css';


function Movie() {
    const [trendingArray, setTrendingArray] = useState([]);
    const sendReq = async () => {
        const serverURL = 'https://movies-library-eosin.vercel.app/trending';
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data);
        setTrendingArray(data);
    }

    const [showFlag, setShowFlag] = useState(false)
    const [clickedCard, setClickedCard] = useState({});
    const handleShow = (item) => {
        setClickedCard(item);
        setShowFlag(true);
    }

    const handleClose = () => {
        setShowFlag(false);
    }

    useEffect(() => {
        sendReq();
    }, [])

    return (
        <>
            {/* <button onClick={sendReq}>send request</button> */}
            <Row xs={1} md={4} className="g-4">
                {trendingArray.map((item) => {
                  return  <Col key={item.id}>
                        <Card className="card">
                            <Card.Img className="card-img" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title className="card-title">{item.title}</Card.Title>
                                <Button  className='btn' variant="primary" onClick={() => { handleShow(item) }}> add to the favorite list</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
            <ModalMovie showFlag={showFlag} handleClose={handleClose} cardData={clickedCard} />
        </>
    )
}
export default Movie
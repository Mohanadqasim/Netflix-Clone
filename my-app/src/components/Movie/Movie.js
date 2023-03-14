
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from '../ModalMovie/ModalMovie';


function Movie() {
    const [trendingArray, setTrendingArray] = useState([]);
    const sendReq = async () => {
        const serverURL = 'http://localhost:3003/trending';
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data);
        setTrendingArray(data);
    }

    const [showFlag,setShowFlag] = useState(false)
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
                {trendingArray.map((item) => (
                    <Col key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                {/* <Card.Text></Card.Text> */}
                                <Button variant="primary" onClick={() => {handleShow(item)}}> add to the favorite list</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <ModalMovie showFlag={showFlag} handleClose={handleClose} cardData={clickedCard}/>
        </>
    )
}
export default Movie
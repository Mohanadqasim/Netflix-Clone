import ModalFavoriteMovie from "../ModalFavoriteMovie/ModalFavoriteMovie";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';





function FavoriteMovie() {


    const [favoriteArray, setFavoriteArray] = useState([]);
    const sendReq = async () => {
        const serverURL = 'https://movies-library-eosin.vercel.app/allmovies';
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data);
        setFavoriteArray(data);
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
    })


    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {favoriteArray.map((item) => {
                    return <Col key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.feedback}</Card.Text> 
                                <Button variant="primary" onClick={{sendReq}}> Delete</Button>
                                <Button variant="primary" onClick={() => { handleShow(item) }}> Update</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
            <ModalFavoriteMovie showFlag={showFlag} handleClose={handleClose} cardData={clickedCard} />
        </>
    )
}
export default FavoriteMovie;
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
    const fetchDelete = async () => {
        const remove = {
            title: favoriteArray.title,
            release_date: favoriteArray.release_date,
            overview: favoriteArray.overview,
            poster_path: favoriteArray.poster_path,
            feedback: favoriteArray.feedback
        };
        await fetch(`https://movies-library-eosin.vercel.app/deletemovie/${favoriteArray.id}`, {

            method: 'DELETE',

            body: JSON.stringify(

                remove
            ),
            
        })
    }

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {favoriteArray.map((item) => {
                    return <Col key={item.id}>
                        <Card className="card">
                            <Card.Img className="card-img" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title className="card-title">{item.title}</Card.Title>
                                <Card.Text>{item.feedback}</Card.Text> 
                                <Button  className='btn' variant="danger" onClick={{fetchDelete}}> Delete</Button>
                                <Button  className='btn' variant="primary" onClick={() => { handleShow(item) }}> Update</Button>
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
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import ModalMovie from '../ModalMovie/ModalMovie';


function Movie() {
    const [trendingArray, setTrendingArray] = useState([]);
    const sendReq = async () => {
        const serverURL = 'http://localhost:3001/trending';
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data);
        setTrendingArray(data);
    }

    useEffect(()=>{
        sendReq();
    }, [])

    const [showOverview, setShowOverview] = useState([]);

    const handleOverviewClick = (index) => {
        const showOverviewCopy = [...showOverview];
        showOverviewCopy[index] = !showOverviewCopy[index];
        setShowOverview(showOverviewCopy);
    }

    return (
        <>
            {/* <button onClick={sendReq}>send request</button> */}
            <Row xs={1} md={4} className="g-4">
                {trendingArray.map((item, index) => (
                    <Col key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {showOverview[index] ? item.overview : `${item.overview.slice(0, 100)}...`}
                                    <Button variant="link" onClick={() => handleOverviewClick(index)}>
                                        {showOverview[index] ? "See less" : "See more"}
                                    </Button>
                                </Card.Text>
                                <Button variant="primary"> add to the favorite list</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Movie
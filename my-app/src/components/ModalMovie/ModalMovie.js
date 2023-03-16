
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function ModalMovie(props) {

    const [addFeedBack, setAddComment] = useState('');
    function handleCommment(event) {
        setAddComment(event.target.value);
    }

    const comment = {
        title: props.cardData.title,
        release_date: props.cardData.release_date,
        poster_path: props.cardData.poster_path,
        overview: props.cardData.overview,
        feedback: addFeedBack
    }

    const fetchRes = async () => {
        await fetch('https://movies-library-eosin.vercel.app/addmovies', {

            method: 'POST',

            body: JSON.stringify(

                comment
            ),
            headers: { 'Content-type': 'application/json; charset=UTF-8', },
        })

    }
    // const [showOverview, setShowOverview] = useState("");
    // const handleOverviewClick = (index) => {
    //     const showOverviewCopy = [...showOverview];
    //     showOverviewCopy[index] = !showOverviewCopy[index];
    //     setShowOverview(showOverviewCopy);
    // }

    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.cardData.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img width='100%' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${props.cardData.poster_path}`} alt='poster' />
                    {/* {showOverview[index] ? props.cardData.overview : `${props.cardData.overview}`.substring(0, 100) + '...'}
                    <Button variant="link" onClick={() => handleOverviewClick(index)}>
                        {showOverview[index] ? "See less" : "See more"}
                    </Button> */}
                    <div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add a comment...</Form.Label>
                            <Form.Control as="textarea" onChange={handleCommment} rows={3} />
                        </Form.Group>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={fetchRes}>
                        Add comment
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalMovie
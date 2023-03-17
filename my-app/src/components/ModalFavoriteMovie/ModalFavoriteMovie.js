import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalFavoriteMovie(props) {
    const [updateFeedback, setUpdateFeedback] = useState('');
    function handleUpdated(event) {
        event.preventDefault();
        setUpdateFeedback(event.target.value);
    }
    const fetchUpdate = async () => {
        const update = {
            title: props.cardData.title,
            release_date: props.cardData.release_date,
            overview: props.cardData.overview,
            poster_path: props.cardData.poster_path,
            feedback: updateFeedback
        };
        await fetch(`https://movies-library-eosin.vercel.app/updatemovie/${props.cardData.id}`, {

            method: 'PUT',

            body: JSON.stringify(

                update
            ),
            headers: { 'Content-type': 'application/json; charset=UTF-8', },
        })
    }
    return (


        <>
            <Modal show={props.showFlag} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.cardData.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img width='100%' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${props.cardData.poster_path}`} alt='poster' />
                    <div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Update Your Feedback...</Form.Label>
                            <Form.Control as="textarea" name='comment' onChange={handleUpdated} rows={3} defaultValue={props.cardData.feedback} />
                        </Form.Group>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        fetchUpdate()
                        props.handleClose()
                    }}>
                        Update Feedback
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalFavoriteMovie;
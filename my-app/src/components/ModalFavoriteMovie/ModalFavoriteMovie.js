import Button from 'react-bootstrap/Button';
import { useEffect,useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function ModalFavoriteMovie(props) {
    const [updateFeedback, setUpdateFeedback] = useState('');
    function handleUpdated(event) {
        setUpdateFeedback(event.target.value);
    }

    // const fetchDelete = async () => {
    //     // DELETE request using fetch with async/await
    //     const element = document.querySelector('#delete-request-async-await .status');
    //     await fetch(`https://movies-library-eosin.vercel.app/updatemovie/${props.cardData.id}`, { method: 'DELETE' });
    // };


    const fetchUpdate = async () => {
        console.log('dfdfhdfhdf');
        await fetch(`https://movies-library-eosin.vercel.app/updatemovie/${props.cardData.id}`, {

            method: 'PUT',

            body: JSON.stringify({

                feedback: updateFeedback
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8', },
        })

    }
    useEffect(()=>{
        fetchUpdate();
    })
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
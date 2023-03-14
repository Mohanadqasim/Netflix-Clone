
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';


function ModalMovie(props,index) {

    
    const [showOverview, setShowOverview] = useState([]);
    const handleOverviewClick = (index) => {
        const showOverviewCopy = [...showOverview];
        showOverviewCopy[index] = !showOverviewCopy[index];
        setShowOverview(showOverviewCopy);
    }

    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.cardData.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={props.cardData.poster_path} alt='poster'></img>
                    {showOverview[index] ? props.cardData.overview : `${props.cardData.overview.slice(0, 100)}...`}
                                    <Button variant="link" onClick={() => handleOverviewClick(index)}>
                                        {showOverview[index] ? "See less" : "See more"}
                                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalMovie
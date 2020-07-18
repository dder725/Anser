import React, { useState } from 'react';
import like from './img/like.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Like = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button
      className="likeOptions"
      type="button"
      onClick={handleShow}
    >
      <img src={like} alt="Like User" />
    </button>

    <Modal 
      show={show} 
      onHide={handleClose}       
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Modal.Title>You Have A Match</Modal.Title>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Keep Searching
        </Button>
        <Link to='/chat'>
          <Button variant="primary" onClick={handleClose}>
            Message
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default Like;

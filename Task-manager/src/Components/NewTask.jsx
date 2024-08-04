import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Recuadro.css';

function NewTask({ addNote, onClose }) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeNote = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote({
      title: title,
      note: note,
    });
    setTitle('');
    setNote('');
    onClose();
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={handleChangeTitle}
              placeholder="Enter task title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNote">
            <Form.Label>Note:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={note}
              onChange={handleChangeNote}
              placeholder="Enter your note here..."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewTask;

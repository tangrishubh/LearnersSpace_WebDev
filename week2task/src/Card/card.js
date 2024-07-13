// EditableNote.js
import React, { useState, useEffect, useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './card.css'; // Ensure this imports your CSS file

const EditableNote = ({bgColor, id, deleteNote }) => {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    // Load the saved note from local storage
    const savedNote = localStorage.getItem('noteContent-${id}');
    const savedTitle = localStorage.getItem('noteTitle-${id');
    if (savedNote) setNote(savedNote);
    if (savedTitle) setTitle(savedTitle);
  }, [id]);

  useEffect(() => {
    // Adjust the height of the textarea to fit the content
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [note]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    // Save the note content and title to local storage
    localStorage.setItem('noteContent-${id}', note);
    localStorage.setItem('noteTitle-${id}', title);
    alert('Note saved!');
  };

  const handleDelete = () => {
    // Clear the note content and title
    setNote('');
    setTitle('');
    // Remove from local storage
    localStorage.removeItem('noteContent-${id}');
    localStorage.removeItem('noteTitle-${id}');
    deleteNote(id);
  };

  return (
    <Container className="note-container my-3 p-3 border rounded" style={{ backgroundColor: bgColor }}>
      <Form>
        <Form.Group controlId="noteTitle">
          <Form.Control 
            type="text" 
            value={title} 
            onChange={handleTitleChange} 
            placeholder="Enter title..." 
          />
        </Form.Group>
        <Form.Group controlId="noteContent">
          <Form.Control 
            as="textarea" 
            rows={1} 
            ref={textareaRef}
            value={note} 
            onChange={handleNoteChange} 
            placeholder="Type your note..." 
            style={{ resize: 'none', overflow: 'hidden' }}
          />
        </Form.Group>
        <Button 
          variant="primary" 
          onClick={handleSave}
          className="save-button"
        >
          Save Note
        </Button>
        <Button 
          variant="danger" 
          onClick={handleDelete}
          className="delete-button"
        >
          Delete Note
        </Button>
      </Form>
    </Container>
  );
};

export default EditableNote;

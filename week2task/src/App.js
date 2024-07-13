import { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Background from '../src/Background/trynew';
import Navbarz from './navbar/navbar';
import EditableNote from './Card/card';
import Sidebar from '../src/sidebar.js/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToggleButtonExample from '../src/toggleswitch/toggleswitch';

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);


  const handleThemeChange = (selectedMode) => {
    if (selectedMode === '2') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  const createNote = (color) => {
    const newNote = { id: Date.now(), color };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="bg-container">
      <ToggleButtonExample handleThemeChange={handleThemeChange} />
        <Router>
          <hr />
          <Navbarz darkMode={darkMode}/>
          <hr />
          <Container className="notes-container">
            <Row className="justify-content-center">
              <Col md={8} className="text-center">
                <Routes>
                  <Route path="/" element={<Background />} />
                  <Route path="/new" element={<Sidebar createNote={createNote} />} />
                  <Route path="/new" element={<EditableNote />} />
                </Routes>
                {notes.map((note) => (
                  <EditableNote
                    key={note.id}
                    id={note.id}
                    bgColor={note.color}
                    deleteNote={deleteNote}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './sidebar.css';

const Sidebar = ({ createNote }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes([
      { id: 1, color: 'rgb(189, 80, 80)' },
      { id: 2, color: 'rgb(132, 132, 220)' }
    ]);
  }, []); 

  const handleSelect = (color) => {
    createNote(color);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-buttons">
        {/* Larger screens */}
        <div className="d-none d-md-flex">
          <button className="sidebar-button" style={{ backgroundColor: 'rgb(189, 80, 80)' }} onClick={() => handleSelect('rgb(189, 80, 80)')}></button>
          <button className="sidebar-button" style={{ backgroundColor: 'rgb(132, 132, 220)' }} onClick={() => handleSelect('rgb(132, 132, 220)')}></button>
          <button className="sidebar-button" style={{ backgroundColor: 'rgb(239, 239, 147)' }} onClick={() => handleSelect('rgb(239, 239, 147)')}></button>
          <button className="sidebar-button" style={{ backgroundColor: 'rgb(219, 177, 99)' }} onClick={() => handleSelect('rgb(219, 177, 99)')}></button>
          <button className="sidebar-button" style={{ backgroundColor: 'rgb(143, 231, 143)' }} onClick={() => handleSelect('rgb(143, 231, 143)')}></button>
        </div>

        {/* Smaller screens */}
        <div className="d-md-none">
          <button className="sidebar-button-small" style={{ backgroundColor: 'rgb(189, 80, 80)' }} onClick={() => handleSelect('rgb(189, 80, 80)')}></button>
          <button className="sidebar-button-small" style={{ backgroundColor: 'rgb(132, 132, 220)' }} onClick={() => handleSelect('rgb(132, 132, 220)')}></button>
          <button className="sidebar-button-small" style={{ backgroundColor: 'rgb(239, 239, 147)' }} onClick={() => handleSelect('rgb(239, 239, 147)')}></button>
          <button className="sidebar-button-small" style={{ backgroundColor: 'rgb(219, 177, 99)' }} onClick={() => handleSelect('rgb(219, 177, 99)')}></button>
          <button className="sidebar-button-small" style={{ backgroundColor: 'rgb(143, 231, 143)' }} onClick={() => handleSelect('rgb(143, 231, 143)')}></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

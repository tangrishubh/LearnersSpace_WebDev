import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const ToggleButtonExample = ({ handleThemeChange }) => {
  const radios = [
    { name: 'Light', value: '1' },
    { name: 'Dark', value: '2' },
  ];

  const handleChange = (e) => {
    handleThemeChange(e.currentTarget.value);
  };

  return (
    <ButtonGroup>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={idx % 2 ? 'outline-dark' : 'outline-light'}
          name="radio"
          value={radio.value}
          onChange={handleChange}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ToggleButtonExample;

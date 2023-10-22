import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">
        <RiSearchLine />
      </button>
    </form>
  );
};

export default WeatherForm;
import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';

const API_KEY = 'a05b305282b83803caaa8565028a6e11';

const App = () => {
  const [weather, setWeather] = useState(null);

  const searchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Erro ao buscar informações do clima:', error.message);
    }
  };

  return (
    <div className="App">
      <WeatherForm onSearch={searchWeather} />
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
};

export default App;
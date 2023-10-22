import React from 'react';

const WeatherInfo = ({ weather }) => {

  const getBackgroundImage = (temperature) => {
    if (temperature > 15) {
      return 'url(calor.jpg)';
    } else {
      return 'url(frio.jpg)';
    }
  };

  const backgroundStyle = {
    backgroundImage: getBackgroundImage(weather.main.temp),
  };
  

  return (
    <div className="weather-info" style={backgroundStyle}>
      <h2>{weather.name}</h2>
      <p>Temperatura: {weather.main.temp}°C</p>
      <p>Visibilidade: {weather.visibility}</p>
    </div>
  );
};

export default WeatherInfo;
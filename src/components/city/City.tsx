import React from 'react';
import { TCity } from 'ducks/weather/weatherSlice';
import {
  formatKelvinToCel,
  formatWindDegToString,
  formatWindSpeed,
} from 'utils/convertors';
import { getWeatherIcon } from 'config/openWeatherConfig';

interface ICityProps {
  city: TCity;
}

const City: React.FC<ICityProps> = ({ city }) => {
  return (
    <div>
      <div>{city.name}</div>
      <div>{formatKelvinToCel(city.main.temp)}</div>
      <div>{formatWindDegToString(city.wind.deg)}</div>
      <div>{formatWindSpeed(city.wind.speed)}</div>
      <div>{city.weather[0]?.description}</div>
      <div>
        <img src={getWeatherIcon(city.weather[0]?.icon)} alt="weather icon" />
      </div>
    </div>
  );
};

export { City };

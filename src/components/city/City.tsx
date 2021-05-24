import React from 'react';
import { TCity } from 'ducks/weather/weatherSlice';
import {
  formatKelvinToCel,
  formatWindDegToString,
  formatWindSpeed,
} from 'utils/convertors';
import { getWeatherIcon } from 'config/openWeatherConfig';
import styles from './City.module.scss';

interface ICityProps {
  city: TCity;
}

const City: React.FC<ICityProps> = ({ city }) => {
  return (
    <div className={styles.CityContainer}>
      <div>
        <img src={getWeatherIcon(city.weather[0]?.icon)} alt="weather icon" />
      </div>
      <div className={styles.boldText}>{city.name}</div>
      <div className={styles.bigText}>{formatKelvinToCel(city.main.temp)}</div>
      <div className={styles.weatherDescription}>
        <div>{city.weather[0]?.description}</div>
        <div>{formatWindDegToString(city.wind.deg)}</div>
        <div>{formatWindSpeed(city.wind.speed)}</div>
      </div>
    </div>
  );
};

export { City };

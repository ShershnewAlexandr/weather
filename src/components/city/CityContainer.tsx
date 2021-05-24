import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  cityWeatherErrorSelector,
  cityWeatherSelector,
} from 'ducks/weather/weatherSelectors';
import { weatherActions } from 'ducks/weather/weatherSlice';
import { IRouteCityParams } from 'utils/constants/routes';
import { City } from './City';
import { CityLoader } from './CityLoader';
import { CityError } from './CityError';

const CityContainer: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams<IRouteCityParams>();
  const cityWeather = useSelector(cityWeatherSelector(params?.cityName));
  const error = useSelector(cityWeatherErrorSelector);

  React.useEffect(() => {
    if ((!cityWeather || cityWeather.needUpdate) && params.cityName) {
      dispatch(weatherActions.getWeatherRequest(params.cityName));
    }
  }, [cityWeather, params.cityName, dispatch]);

  if (error) {
    return <CityError />;
  }

  return cityWeather ? <City city={cityWeather} /> : <CityLoader />;
};

export { CityContainer };

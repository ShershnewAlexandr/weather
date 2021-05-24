import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cityWeatherSelector } from 'ducks/weather/weatherSelectors';
import { weatherActions } from 'ducks/weather/weatherSlice';
import { IRouteCityParams } from 'utils/constants/routes';
import { City } from './City';
import { CityLoader } from './CityLoader';

const CityContainer: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams<IRouteCityParams>();
  const cityWeather = useSelector(cityWeatherSelector(params?.cityName));

  React.useEffect(() => {
    if ((!cityWeather || cityWeather.needUpdate) && params.cityName) {
      dispatch(weatherActions.getWeatherRequest(params.cityName));
    }
  }, [cityWeather, params.cityName, dispatch]);

  return cityWeather ? <City city={cityWeather} /> : <CityLoader />;
};

export { CityContainer };

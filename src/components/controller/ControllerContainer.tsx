import React from 'react';
import { useParams } from 'react-router';
import { IRouteCityParams } from 'utils/constants/routes';
import { ControllerDesktop } from './components/ControllerDesktop';
import { cities } from 'config/openWeatherConfig';

const ControllerContainer: React.FC = () => {
  const params = useParams<IRouteCityParams>();

  return params?.cityName ? (
    <ControllerDesktop cities={cities} currentCityName={params.cityName} />
  ) : null;
};

export { ControllerContainer };

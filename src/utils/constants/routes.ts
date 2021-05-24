import { cities } from 'config/openWeatherConfig';

export interface IRouteCityParams {
  cityName?: string;
}

export const routes = {
  CITY: '/:cityName',
  BASE_ROUTE: `/${cities[0]}`,
};

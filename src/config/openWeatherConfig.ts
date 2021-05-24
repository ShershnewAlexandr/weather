export const APIKey = 'da608f8b87bc3dc81f5107d0a0f7d71d';
export const APIUrl = 'https://api.openweathermap.org/data/2.5/weather';
export const cities = [
  'Novosibirsk',
  'Sochi',
  'Barnaul',
  'Vladivostok',
  'Ivanovo',
  'Murmansk',
  'Omsk',
  'Volgograd',
  'Kazan',
  'Irkutsk',
];
export const getWeatherIcon = (code: string) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

type subWeather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export interface IWeather {
  base: string;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  weather: subWeather[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

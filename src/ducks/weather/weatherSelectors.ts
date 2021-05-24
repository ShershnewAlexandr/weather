import { IState, TCity } from './weatherSlice';

export const weatherSelectorFactory =
  (selector: (state: IState) => any) => (state: any) =>
    selector(state.weather);

export const activeWeatherSelector = weatherSelectorFactory(
  (state: IState): TCity => state.cities[state.activeCity]
);

export const cityWeatherSelector = (city?: string) =>
  weatherSelectorFactory((state: IState): TCity | null =>
    city ? state.cities[city] : null
  );

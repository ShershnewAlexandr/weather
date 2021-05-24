import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { differenceInMinutes } from 'date-fns';
import { IWeather } from './weatherTypes';
import { cities } from 'config/openWeatherConfig';

interface IAdditionalWeatherInfo {
  updatedAt: string;
  needUpdate: boolean;
}

export type TCity = IWeather & IAdditionalWeatherInfo;

export interface IState {
  cities: {
    [key in string]: TCity;
  };
  activeCity: string;
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cities: {},
    activeCity: cities[0],
  },
  reducers: {
    getWeatherRequest: (state: IState, action: PayloadAction<string>) => {},
    getWeatherSuccess: (state: IState, action: PayloadAction<IWeather>) => {
      state.cities = {
        ...state.cities,
        [action.payload.name]: {
          ...action.payload,
          updatedAt: new Date().toString(),
          needUpdate: false,
        },
      };
    },
    getWeatherError: () => {},
    actualizeWeather: (state: IState) => {
      Object.entries(state.cities).forEach(([key, city]) => {
        if (differenceInMinutes(new Date(), new Date(city.updatedAt)) > 1) {
          state.cities[key].needUpdate = true;
        }
      });
    },
  },
});

export const weatherActions = weatherSlice.actions;

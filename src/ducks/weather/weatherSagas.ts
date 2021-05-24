import axios, { AxiosResponse } from 'axios';
import { differenceInMinutes } from 'date-fns';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  call,
  all,
  put,
  select,
  delay,
  takeLatest,
  fork,
} from 'redux-saga/effects';
import { APIKey, APIUrl } from 'config/openWeatherConfig';
import { weatherActions, TCity } from './weatherSlice';
import { IWeather } from './weatherTypes';
import { activeWeatherSelector, cityWeatherSelector } from './weatherSelectors';

function* getWeatherRequest(
  action: PayloadAction<string>
): Generator<unknown, any, AxiosResponse<IWeather> & TCity> {
  const { payload: cityName } = action;
  try {
    const city: TCity = yield select(cityWeatherSelector(cityName));

    if (
      city
        ? differenceInMinutes(new Date(), new Date(city.updatedAt)) > 1
        : true
    ) {
      const response: AxiosResponse<IWeather> = yield axios.get(APIUrl, {
        params: {
          appid: APIKey,
          q: cityName,
        },
      });
      yield put(
        weatherActions.getWeatherSuccess({
          cityKey: cityName,
          weather: response.data,
        })
      );
    }
  } catch (e) {
    yield put(weatherActions.getWeatherError());
  }
}

function* actualizeWeather(): Generator<unknown, any, TCity> {
  const activeWeather = yield select(activeWeatherSelector);
  if (activeWeather?.needUpdate) {
    yield call(
      getWeatherRequest,
      weatherActions.getWeatherRequest(activeWeather.name)
    );
  }
  yield put(weatherActions.actualizeWeather());
}

function* actualizeWeatherInterval(): Generator {
  while (true) {
    yield delay(5000);
    yield call(actualizeWeather);
  }
}

export const weatherSaga = function* () {
  yield all([
    takeLatest<any>(weatherActions.getWeatherRequest.type, getWeatherRequest),
    fork(actualizeWeatherInterval),
  ]);
};

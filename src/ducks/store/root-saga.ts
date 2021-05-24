import { call, all } from 'redux-saga/effects';
import { weatherSaga } from 'ducks/weather/weatherSagas';

const rootSaga = function* () {
  yield all([call(weatherSaga)]);
};

export { rootSaga };

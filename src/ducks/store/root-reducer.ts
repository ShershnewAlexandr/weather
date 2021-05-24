import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';
import { weatherSlice } from 'ducks/weather/weatherSlice';

const rootReducer = (history: BrowserHistory) =>
  combineReducers({
    router: connectRouter(history),
    [weatherSlice.name]: weatherSlice.reducer,
  });

export { rootReducer };

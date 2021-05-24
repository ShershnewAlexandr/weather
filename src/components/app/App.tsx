import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { routes } from 'utils/constants/routes';
import { CityContainer } from 'components/city/CityContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.CITY} component={CityContainer} />
        <Redirect to={routes.BASE_ROUTE} />
      </Switch>
    </div>
  );
};

export { App };

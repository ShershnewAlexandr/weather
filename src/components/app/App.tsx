import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { routes } from 'utils/constants/routes';
import { CityPage } from 'components/pages/CityPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.CITY} component={CityPage} />
        <Redirect to={routes.BASE_ROUTE} />
      </Switch>
    </div>
  );
};

export { App };

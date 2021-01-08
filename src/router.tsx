import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { AppContext, AppContextReducer, AppStateInit} from '@shared/context/index';

import Home from '@pages/Home';

function Router() {

  const [state, dispatch] = React.useReducer(AppContextReducer, AppStateInit);

  const render = () => (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={ Home }/>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );

  return render();
}

export default Router;


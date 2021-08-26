import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPageScreen from '../main-page/main-page';
import BlankPageScreen from '../blank-page/blank-page';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPageScreen />
        </Route>
        <Route exact path='/blank'>
          <BlankPageScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

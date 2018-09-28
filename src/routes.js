import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import Breweries from './components/breweries/Breweries';

export default (
  <Route path="/" component={App}>
    <IndexRoute path="breweries" component={Breweries}/>
  </Route>
);

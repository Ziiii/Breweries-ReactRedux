import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import Breweries from './components/breweries/Breweries';
import BreweriesEdit from './components/breweries/BreweriesEdit'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Breweries}/>
    <Route path="brewery" component={BreweriesEdit}/>
    <Route path="brewery/:id" component={BreweriesEdit}/>
  </Route>
);

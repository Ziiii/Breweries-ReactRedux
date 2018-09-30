import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import '../node_modules/toastr/build/toastr.min.css';
import {loadBreweries,saveBrewery,deleteBrewery} from "./components/breweries/breweriesActions";


const store = configureStore();
store.dispatch(loadBreweries());
store.dispatch(saveBrewery());
store.dispatch(deleteBrewery());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

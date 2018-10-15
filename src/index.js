import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainRoot from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import '../node_modules/toastr/build/toastr.min.css';
import {loadBreweries,loadFilteredBreweries,saveBrewery,deleteBrewery} from "./components/breweries/breweriesActions";


const store = configureStore();
store.dispatch(loadBreweries());
store.dispatch(saveBrewery());
store.dispatch(deleteBrewery());
store.dispatch(loadFilteredBreweries());

render(
  <Provider store={store}>
    <MainRoot/>
  </Provider>,
  document.getElementById('app')
);
{/*<Router routes={routes}/>*/}

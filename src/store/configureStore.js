import {createStore,applyMiddleware,combineReducers, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import breweries from '../components/breweries/breweriesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  breweries
});



export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk,reduxImmutableStateInvariant()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}

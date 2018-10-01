import {createStore,applyMiddleware,combineReducers} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import breweries from '../components/breweries/breweriesReducer';

const rootReducer = combineReducers({
  breweries
});



export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk,reduxImmutableStateInvariant())
  );
}

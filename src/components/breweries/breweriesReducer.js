import * as types from "../../actions/actionTypes";

export default function breweriesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_BREWERIES_SUCCESS:
      return Object.assign([],action.breweries);
    case types.SAVE_BREWERIES_SUCCESS:
      if(!action.brewery){
        return state;
      }
      return [...state,Object.assign({},action.brewery)];
    case types.UPDATE_BREWERIES_SUCCESS:
      return Object.assign([],action.breweries);
    case types.DELETE_BREWERIES_SUCCESS:
      return [
        ...state.filter(brewery => brewery.id !== action.breweryId)
      ];
    default:
      return state;
  }
}

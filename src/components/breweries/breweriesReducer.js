import * as types from "../../actions/actionTypes";

export default function breweriesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_BREWERIES_SUCCESS:
      return action.breweries;
    case types.SAVE_BREWERIES_SUCCESS:
      return [...state,Object.assign({},action.brewerie)];
    case types.DELETE_BREWERIES_SUCCESS:
      return [
        ...state.filter(brewerie => brewerie.id !== action.brewerie.id),
        Object.assign({},action.brewerie)
      ];
    default:
      return state;
  }
}

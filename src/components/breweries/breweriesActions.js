import * as types from "../../actions/actionTypes";
import breweriesApi from "../../api/breweriesApi";

export function loadBreweriesSuccess(breweries) {
    return {type: types.LOAD_BREWERIES_SUCCESS,breweries};
}

export function saveBrewweriesSuccess(brewerie) {
  return {type: types.SAVE_BREWERIES_SUCCESS,brewerie};
}

export function deleteBrewweriesSuccess(brewerieId) {
  return {type: types.DELETE_BREWERIES_SUCCESS,brewerieId};
}


export function loadBreweries(){
  return (dispatch) =>{
    return breweriesApi.getBreweries().then(breweries => {
      dispatch(loadBreweriesSuccess(breweries));
    });
  };
}




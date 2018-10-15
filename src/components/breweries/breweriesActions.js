import * as types from "../../actions/actionTypes";
import breweriesApi from "../../api/breweriesApi";

export function loadBreweriesSuccess(breweries) {
  return {type: types.LOAD_BREWERIES_SUCCESS, breweries};
}

export function saveBrewerySuccess(brewery) {
  return {type: types.SAVE_BREWERIES_SUCCESS, brewery};
}

export function deleteBrewerySuccess(breweryId) {
  return {type: types.DELETE_BREWERIES_SUCCESS, breweryId};
}

export function updateBrewerySuccess(breweries){
  return {type: types.UPDATE_BREWERIES_SUCCESS,breweries};
}

export function loadFilteredBreweriesSuccess(breweries) {
  return {type: types.LOAD_FILTERED_BREWERIES_SUCCESS,breweries}
}

export function loadBreweries() {
  return (dispatch) => {
    return breweriesApi.getBreweries().then(breweries => {
      dispatch(loadBreweriesSuccess(breweries));
    });
  };
}

export function loadFilteredBreweries(name,city) {
  return (dispatch) => {
    return breweriesApi.getFilteredBreweries(name,city).then(breweries => {
      dispatch(loadFilteredBreweriesSuccess(breweries));
    });
  };
}

export function saveBrewery(brewery) {
  return (dispatch) => {
    return breweriesApi.saveBrewery(brewery).then((brewery) => {
      dispatch(saveBrewerySuccess(brewery));
    });
  };
}

export function deleteBrewery(breweryId) {
  return (dispatch) => {
    return breweriesApi.deleteBrewery(breweryId).then(() => {
      dispatch(deleteBrewerySuccess(breweryId));
    });
  };
}

export function updateBrewery(brewery) {
  return (dispath) => {
    return breweriesApi.updateBrewery(brewery).then((breweries) => {
      dispath(updateBrewerySuccess(breweries));
    })
  };
}

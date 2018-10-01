import axios from 'axios'

const url = "https://api.openbrewerydb.org/breweries";
var breweries = [];

class BreweriesApi {
  static getBreweries() {
    return InitBrew(breweries);
  }

  static saveBrewery(brewery) {
    return new Promise((resolve, reject) => {
      this.checkBrewerieLoading();
      if (brewery) {
        if (!brewery.id) {
          brewery.id = this.generateId();
        }
        debugger;
        breweries.push(brewery);
        resolve(brewery);
      }
      resolve(brewery);
    });
  }

  static deleteBrewery(breweryId) {
    return new Promise((resolve, reject) => {
      this.checkBrewerieLoading();
      const indexOfBrewerie = breweries.findIndex(item => item.id === breweryId);
      breweries.splice(indexOfBrewerie, 1);
      resolve(breweryId);
    });
  }

  static generateId() {
    debugger;
    let max = breweries.map(item => item.id).reduce((a, b) => {
      if (a > b) {
        return a;
      }
      return b
    });
    return max + 1;
  }

  static checkBrewerieLoading() {

  }
}


export default BreweriesApi;

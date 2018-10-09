import axios from 'axios';

var url = "https://api.openbrewerydb.org/breweries";

var breweries = [];

/*eslint-disable */
class BreweriesApi {
  static async getBreweries() {
    if (breweries.length) {
      return breweries;
    }
    else {
      breweries = (await axios.get(url)).data;
      return breweries;
    }
  }

  static saveBrewery(brewery) {
    return new Promise((resolve, reject) => {
      if (brewery) {
        if (!brewery.id) {
          brewery.id = this.generateId();
        }
        breweries.push(brewery);
      }
      resolve(brewery);
    });
  }

  static updateBrewery(brewery) {
    return new Promise((resolve, reject) => {
      if (brewery) {
        const indx = breweries.findIndex(x => x.id === brewery.id);
        breweries.splice(indx, 1);
        breweries.push(brewery);
        resolve(breweries);
      }
    });
  }

  static deleteBrewery(breweryId) {
    return new Promise((resolve, reject) => {
      const indexOfBrewerie = breweries.findIndex(item => item.id === breweryId);
      breweries.splice(indexOfBrewerie, 1);
      resolve(breweryId);
    });
  }

  static generateId() {
    let max = breweries.map(item => item.id).reduce((a, b) => {
      if (a > b) {
        return a;
      }

      return b;
    });

    return max + 1;
  }
}

/*eslint-enable */

export default BreweriesApi;

import axios from 'axios';

const url = "https://api.openbrewerydb.org/breweries";

async function TestLog(){
  console.log("Write me");
}
TestLog();

/*eslint-disable */
class BreweriesApi {
  static getBreweries() {
    return InitBrew();
  }

  static saveBrewery(brewery) {
    return new Promise((resolve, reject) => {
      this.checkBrewerieLoading();
      if (brewery) {
        if (!brewery.id) {
          brewery.id = this.generateId();
        }

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
    let max = breweries.map(item => item.id).reduce((a, b) => {
      if (a > b) {
        return a;
      }

      return b;
    });

    return max + 1;
  }

  static checkBrewerieLoading() {

  }
}
/*eslint-enable */

export default BreweriesApi;

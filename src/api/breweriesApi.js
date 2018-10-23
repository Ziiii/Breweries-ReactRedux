import axios from 'axios';



function getUrl(name,city){
  let url = "https://api.openbrewerydb.org/breweries";
  let params = [];
  if(name){
    params.push("by_name="+name);
  }

  if(city){
    params.push("by_city="+city);
  }

  if(params.length>0){
    url = `${url}?${params.join("&")}`
  }

  return url
}

var breweries = [];

/*eslint-disable */
class BreweriesApi {
  static async getBreweries() {
    if (breweries.length) {
      return breweries;
    }
    else {
      let url = getUrl(null,null);
      breweries = (await axios.get(url)).data;
      return breweries;
    }
  }

  static async getFilteredBreweries(name,city){
    let url = getUrl(name,city);
    breweries = (await axios.get(url)).data;
    return breweries;
  }

  static async saveBrewery(brewery) {
    if (brewery) {
      if (!brewery.id) {
        brewery.id = this.generateId();
      }

      breweries.push(brewery);
    }

    return brewery;
  }

  static async updateBrewery(brewery) {
    if (brewery) {
      const indx = breweries.findIndex(x => x.id === brewery.id);
      breweries.splice(indx, 1);
      breweries.push(brewery);
      return breweries;
    }
  }

  static async deleteBrewery(breweryId) {
    const indexOfBrewerie = breweries.findIndex(item => item.id === breweryId);
    breweries.splice(indexOfBrewerie, 1);
    return breweryId;
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

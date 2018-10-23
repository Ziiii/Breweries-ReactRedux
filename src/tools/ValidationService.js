export default class ValidationService {
  static validateBrewery(brewery) {
    let errors = {name: "", city: "", phone: ""};
    const error = "Filed is required";
    let isValid = true;
    if (!brewery.name) {
      errors.name = error;
      isValid = false;
    }

    if (!brewery.city) {
      errors.city = error;
      isValid = false;
    }

    if (!brewery.phone) {
      errors.phone = error;
      isValid = false;
    }
    return [isValid, errors];
  }
}

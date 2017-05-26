(function() {
  // ****
  // Object literal news

  // When assigning variables to an object literal where the properties is going to have the same name as
  // the variables, there is no need to repeat yourself, like age: age, gender: gender.
  let name = 'Hans';
  let age = 28;
  let homeTown = 'Stockholm';
  let gender = 'Male';
  let hasDriversLicense = true;

  let me = {
    firstName: name,
    age,
    homeTown,
    gender,
    hasDriversLicense
  }

  // We can omit the colon and function keyword from function properties
  let app = {
    boot(config) {

    },
    shutdown(exitMessage) {

    }
  }


  // We can now create dynamic properties
  let key = 'Car';
  let createCar = function(brand, model, ...extras) {
    return {
      brand,
      model,
      [`run${key}`]() {
        engine.start();
      },
      extras
    }
  }

  console.log(createCar('Volvo', 'XC90', 'Airbag', 'Wifi', 'GPS'));


})();
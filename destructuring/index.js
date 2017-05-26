(function() {
  let me = {
    name: 'Hans Bentlöv',
    age: 28,
    gender: 'male',
    homeTown: 'Stockholm',
    length: 190,
    favouriteColor: 'blue',
    hasDriversLicense: true,
    links: {
      social: {
        facebook: 'http://www.facebook.com/hanserikb',
        twitter: 'http://www.twitter.com/hanserikb'
      },
      website: 'http://www.bentlov.se'
    }
  }

  // Simple destructuring
  const {
    name,
    age
  } = me;
  console.log(name);
  console.log(age);

  // Destructuring nested data with renaming
  const {
    facebook: facebookLink,
    twitter: twitterLink
  } = me.links.social;
  console.log(facebookLink);
  console.log(twitterLink);

  // ****
  // Default settings
  // If the property cant be found on the destructured object, a default value will be picked, if set.
  const settings = {
    height: 100,
    width: 200,
    backgroundColor: 'blue'
  };
  const {
    width,
    height,
    backgroundColor,
    fontSize = '10'
  } = settings
  console.log(fontSize); // 10

  // ****
  //
  // A combination of renaming and default settings
  // 300 will be picked from the destructured object's w parameter and renamed to elementWidth
  // There are no h parameter, therefore the default value 300 will be set to the renamed elementHeight variable.
  const {
    w: elementWidth = 100,
    h: elementHeight = 300
  } = {
    w: 300
  };
  console.log(elementWidth); // 300
  console.log(elementHeight); // 300


  // ***
  // Array destructuring
  const finalists = ['Bolt', 'Owens', 'Radcliffe', 'Bekele'];
  let [gold, silver, bronze] = finalists;
  console.log(gold);
  console.log(silver);
  console.log(bronze);

  const details = 'Bolt,22,11, 4, 5, 2, 33';
  let [runnerName, goldMedals, silverMedals, ...otherMedals] = details.split(',');
  console.log(runnerName, goldMedals, silverMedals, otherMedals)



  // ****
  // Swapping variables with destructing
  let activePlayer = 'Zlatan';
  let benchPlayer = 'Messi';
  [activePlayer, benchPlayer] = [benchPlayer, activePlayer]



  // ****
  // Destructuring function returns
  function convertCurrency(amount) {
    return {
      USD: amount * 0.12,
      GBP: amount * 0.18,
      AUD: amount * 1.01,
    };
  }

  const {
    USD
  } = convertCurrency(100);
  console.log(USD);


  // ***
  // Destructuring function arguments
  // Wrapping the function parameters with curly brackets will destructure the passed object into
  // variables with the defined names, making you not having to pass arguments in a particular order
  function calcTip({
    total,
    tip = 0.1,
    tax = 0.25
  } = {}) {
    return total + (tip * total) + (tax * total);
  }

  calcTip({
    total: 100,
    tip: 0.2
  });
})();
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */

((document) => {
  // ****
  // Array.from & Array.of
  // These are static methods on the Array constructor, not prototype methods.
  // (they are not available on an actual array)
  // Useful to turn arguments or Nodelists into iterables.
  console.log(Array.isArray(document.querySelectorAll('p'))); // false
  console.log(Array.isArray(Array.from(document.querySelectorAll('p')))); // true

  // It's second argument is a function that acts as the map method.

  // This example returns an array of strings in the queried paragraph tags
  Array.from(document.querySelectorAll('p'), p => p.textContent);

  // arguments to Array.
  function sumAll() {
    return Array.from(arguments).reduce((prev, curr) => prev + curr, 0);
  }

  console.log(sumAll(1, 2, 3, 4, 5, 6));

  // Array.of creates an array from the arguments you pass.
  console.log(Array.of(1, 2, 'Hans', true)); // [1, 2, 'Hans', true]


  // ****
  // Array.find & Array.findIndex
  // Array.Find is useful when you want to find an object in an array based on an ID

  let twitterApiResponse = {
    status: 200,
    tweets: [{
      id: 1231414,
      userId: 1234,
      text: '......',
    },
    {
      id: 5124124,
      userId: 9282,
      text: '......',
    },
    {
      id: 1514513,
      userId: 1234,
      text: '......',
    },
    ],
  };

  let tweet = twitterApiResponse.tweets.find(t => t.id === 5124124);
  console.log(tweet);

  let indexOfTweet = twitterApiResponse.tweets.findIndex(t => t.id === 1514513);
  console.log(indexOfTweet);


  // ****
  // Some & every
  // Not added in ES6, but they haven't got much attention.

  const ages = [22, 18, 64, 12];
  const minorPresent = ages.some(age => age < 18); // true
  const retiredPresent = ages.some(age => age >= 65); // false
  const allOldEnough = ages.every(age => age >= 18); // false

  // ****
  // The spread operator can be used to concatenate multiple arrays into one

  const group1 = ['Hans', 'Johan', 'Erik'];
  const group2 = ['Lisa', 'Stina', 'Anna'];
  const allPeople = [...group1, ...group2];

  // It can also be used to copy an array, instead of using the concat/splice trick
  const allThePeople = [...allPeople];
})(window.document);

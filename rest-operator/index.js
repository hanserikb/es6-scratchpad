(function() {
  // *****
  // Rest operator
  // The rest operator lets us collect an indefinite amount of arguments as an array.

  let results = ['Sweden', 'Canada', 'Russia', 'Finland', 'Slovakia', 'Denmark']

  function formatResult(gold, silver, bronze, ...rest) {
    return `Results were following: <br />
                Goldmedal to ${gold} <br />
                Silvermedal to ${silver} <br />
                Bronzemedal to ${bronze} <br />
                The countries missing the podium were:<br />
                ${rest}`;
  }

  let paragraph = document.createElement('p');
  // Here i'm using the spread operator to spread the results array as individual arguments to the function
  paragraph.innerHTML = formatResult(...results);
  document.body.appendChild(paragraph);


  // Using the rest operator in a function.
  function convertCurrency(rate, ...amounts) {
    return amounts.map(a => rate * a);
  }
  const amounts = convertCurrency(0.54, 10, 22, 40, 12, 233);
  console.log(amounts);


  // The rest operator can be used when destructuring to add the rest of the values to an array.
  let team = ['Hans', 'Erik', 'Gustav', 'Johan', 'Bengt'];
  let [captain, assistant, ...players] = team;
  console.log(captain, assistant, players);

})();
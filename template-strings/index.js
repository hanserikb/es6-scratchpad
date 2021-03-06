/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
((document) => {
  // ****
  // New template string syntax
  const name = 'Hans';
  const age = 28;
  const homeTown = 'Stockholm';

  let pets = [{
    name: 'Fluffy',
    monthOld: 25,
    type: 'Horse',
  }, {
    name: 'Rosa',
    monthOld: 67,
    type: 'Cow',
  }];

  let oldString = 'My name is ' + name + '. I\'m ' + age + ' years old and is currently living in ' + homeTown;
  console.log(oldString);

  // With the new template literal syntax there is no need to string concatenation with the plus sign.
  // Variables, functions, and other js code can be inserted
  // directly in the string literal when wrapping it with backticks.
  let newString = `My name is ${name}. I'm ${age} years old and is currently living in ${homeTown}`;
  console.log(newString);

  // Specially useful when manipulating HTML
  let petInfo =
    `
        <h2>Pets</h2>
        <p>These are my pets (i wish!)</p>
        <ul>
            ${pets.map(p => `
                <li>${p.name} - ${p.type}, ${Math.floor(p.monthOld / 12)} years old</li>
            `).join(' ')}
        </ul>
     `;

  document.write(petInfo);

  // ****
  // Template literals can be 'tagged' which means that instead of letting the browser take care of the actual concatenation,
  // You assign a function to the string that will recieve an array with the splitted string and also the values joining them together
  // as additional parameters (which in this case is grabbed with the rest operator (...)).
  function highlight(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
      str += `${string} <span class="highlight">${values[i] || ''}</span>`;
    });
    return str;
  }

  let sentence = highlight `My name is ${name}. I'm ${age} years old and is currently living in ${homeTown}`;
  console.log(sentence);


  // ****
  // Another example on how string tagging can be used
  let links = {
    css: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    javascript: 'https://developer.mozilla.org/sv-SE/docs/Web/JavaScript',
    nodejs: 'https://nodejs.org/en/',
  };

  function addLink(strings, ...values) {
    let newValues = values.map((v) => {
      if (links[v.toLowerCase()]) {
        return `<a href="${links[v.toLowerCase()]}">${v}</a>`;
      }
      return v;
    });

    return strings.reduce((prev, curr, i) => `${prev}${curr}${newValues[i] || ''}`, '');
  }

  const contentDiv = document.querySelector('#content');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = addLink `Hello. I know ${'CSS'}, ${'Javascript'} and ${'NodeJS'}`;
  contentDiv.appendChild(paragraph);

  // ****
  // Tagging can also be used to sanitize user defined data, for example

  // Fake sanitize library
  function ExternalSantizeService(str) {
    return str;
  }

  function sanitize(strings, ...values) {
    return ExternalSantizeService(strings.reduce((prev, curr, i) => `${prev}${curr}${values[i] || ''}`, ''));
  }
  let username = 'Hans<img src="foo.png" onload="doEvil()" />';
  let sanitizedString = sanitize `${username}`;


  // ****
  // New string methods
  let licenseNumber = 'ACJ-293-S8E';
  let socialSecurityNhmber = '1973993813';


  // Startswith (case sensitive)
  // Accepts a 2nd parameter that tells the method to ignore the first x numbers of characters.
  console.log(licenseNumber.startsWith('ACJ')); // true
  console.log(licenseNumber.startsWith('acj')); // false
  console.log(licenseNumber.startsWith('293', 4)); // true

  // Endswith (case sensitive)
  // Accepts a 2nd parameter to use the first x numbers of characters, and ignore the rest
  console.log(licenseNumber.endsWith('S8E'));
  console.log(licenseNumber.endsWith('s8E')); // false
  console.log(licenseNumber.endsWith('293', 7)); // false

  // Includes (case sensitive)
  console.log(socialSecurityNhmber.includes('1973')); // true

  // Repeat
  // Repeats the string x times
  console.log(`${'na'.repeat(9)} batman!`);
})(window.document);

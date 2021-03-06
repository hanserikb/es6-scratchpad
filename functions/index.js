/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */

((document) => {
  // ****
  // Arrow functions
  const names = ['Jane', 'John', 'June'];

  // With arrow functions, we don't need the function-keyword,
  // return statement (aka implicit return),
  // parameter parenthethis (if there are exact 1 parameter),
  // function body curly brackets (if there are only 1 expression in it)
  const fullNames = names.map(n => `${n} doe`);
  console.log(fullNames);


  // Arrow functions are anonymous, but will be named if they are assigned to a variable
  const sayFirstName = () => {
    console.log(`First name is ${fullNames[0]}`);
  };
  sayFirstName();


  // ****
  // If you need to implicit return an object literal, put parenthethis around it!
  const race = '100m';
  const competitionsResult = fullNames.map((n, i) => ({
    name: n,
    position: i + 1,
    race: race,
  }));

  console.table(competitionsResult);


  const ages = [2, 44, 12, 25, 74, 9, 33, 62, 78];
  const oldies = ages.filter(a => a >= 70);
  console.log(oldies);

  // The this will not be rebound
  // It's instead inerited from the parent scope
  // Beware of this when for example binding a click handler
  const body = document.querySelector('body');
  body.addEventListener('click', () => {
    console.log(this);
    // 'this' in there is the window object, since the fuction isnt bound to the caller executing object (body)
  });

  // ..instead, a normal function expression should be used in this case, binding the value of this to the body object
  body.addEventListener('click', function () {
    console.log(this);
    this.classList.add('filled');

    // Note that if you want to access the clicked element via the 'this' variable in nested methods,
    // the non-this-binding nature of arrow functions can be used to avoid the classic that = this trick.
    setInterval(() => {
      // 'this' in this context is bound to the body element, not the window object (where the setInterval method is located)
      this.classList.toggle('filled');
    }, 1000);
  });


  // ES6 brings default function values, so instead of doing the following:
  /*
      function calculateBill(total, tax, tip) {
          return total + (total * tax) + (total + tip);
      }
      const firstBill = calculateBill(1000, 0.33, 0);
  */

  // .. it can be written like this
  const calculateBill = (total, tax = 0.33, tip = 0) => total + (total * tax) + (total + tip);
  const theBill = calculateBill(1000);
  console.log(theBill);


  // So - normal functions is preferred to be used..
  // When you need to add a method to an object
  const myCar = {
    brand: 'Volvo',
    start: function () {},
  };

  // When you need to add prototype methods
  function Car(brand) {
    this.brand = brand;
  }
  Car.prototype.getBrand = function () {
    // If this would be an arrow function, 'this' would be the window object.
    return this.brand;
  };

  // When you need to access the arguments object
  const count = function count() {
    return Array.from(arguments).reduce((prev, curr) => prev + curr, 0);
  };
  console.log(count(1, 2, 3, 4, 10));
})(window.document);

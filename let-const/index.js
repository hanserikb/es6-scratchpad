/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */

(() => {
  // *****
  // Let, var, const

  // ..var has function scope..
  var varScoped = true;

  // ..let has block scope
  let letScoped = true;

  // Const cannot be re-assigned (will throw an error)
  const points = 10;

  if (points > 5) {
    console.log('I\'m running');
    var varScoped = false;
    let letScoped = false;
  }

  // Since var is function scoped, its changed in the if-block
  console.log(varScoped);

  // Since let assignments is block-scoped, its still true
  console.log(letScoped);


  // *****
  // The function invoked inside the timeout method will log
  // 10 for all iterations of the for-loop
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log('i is: ', i);
    }, 10);
  }

  // The value assigned with the let-statement is bound to the
  // scope of the for-loop, making the delayed function log the correct values
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log('i is: ', i);
      }, 500 * i);
    }
  }, 1000);


  // *****
  // Values assigned with the const statement cannot be redeclared
  // but not that its properties can be changed!
  const person = {
    age: 29,
    name: 'Hans',
  };

  console.log(`My age is ${person.age}`);
  person.age += 1;
  console.log(`In a year, my age will be ${person.age}`);
})();

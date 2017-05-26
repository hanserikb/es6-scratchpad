(function() {
  // The for of-loop can iterate over collections that aren't true array, like NodeCollections and arguments
  function addNumbers() {
    let total = 0;
    for (const arg of arguments) {
      total += arg
    }
    return total;
  }

  // If you modify the prototype of the Array or add properties to an array,
  // the for of-loop will still only iterate over the expected items. (as opposed to the for in-loop)

  // They are also breakable!
})();
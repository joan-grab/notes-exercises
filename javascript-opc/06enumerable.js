'use strict'; 
(function() {

  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 17,
  };

  Object.defineProperty(person, 'firstName', {enumerable:false});

  // property is not seen by following function

  for (let property in person) {
    display(`${property}: ${person[property]}`);
  }  

  display(Object.keys(person));

  display(JSON.stringify(person));

})();
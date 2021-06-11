'use strict'; 
(function() {

// object literals
  let person1 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 17,
    isAdult: function() { return this.age >= 18; },
// shorthand syntax for methods
    isYoung() {return this.age < 18; },
  };

  display(person1.firstName);
  display(person1.age);
  display(person1.isAdult());
  display(person1.isYoung());

// function with object literals
  function registerUser(fName, lName) {
    let person2 = {
      firstName: fName,
      lastName: lName,
    };
    display(person2);
  };

  registerUser('Asia', 'Grab');

// shorthand syntax
  function registerUserShort(firstName, lastName) {
    let person2 = {
      firstName,
      lastName,
    };
    display(person2);
  };

  registerUserShort('Kasia', 'Grab');

})();
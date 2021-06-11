'use strict'; 
(function() {

  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 17,
  };

  Object.defineProperty(person, 'firstName', {configurable:false});
// prevents to delete property or change its atrributes enumerable and configurable (one still can change writable)
  Object.defineProperty(person, 'firstName', {enumerable:false});
// also to change configurable again to true
  Object.defineProperty(person, 'firstName', {configurable:true});

  delete person.firstName;

  display(person);


})();
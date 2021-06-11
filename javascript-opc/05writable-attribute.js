'use strict'; 
(function() {

  let person = {
    name: {
      firstName: 'Jim',
      lastName: 'Cooper',
    },
    age: 17,
  };

  let propertyName = 'firstName';

// brackets are usefull when passing property name as a variable
  display(person[propertyName]);

  for (let property in person) {
    display(`${property}: ${person[property]}`);
  }

  Object.defineProperty(person, 'name', {writable:false}); // cannot change name object but can change its values

  person.name.firstName = 'Kris';

  Object.freeze(person.name); // cannot change it at all (also security benefits)

 // person.name.firstName = 'Adela';  // error maker

  display(Object.getOwnPropertyDescriptor(person, 'firstName'));

  display(person.name);

})();
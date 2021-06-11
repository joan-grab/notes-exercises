'use strict'; 
(function() {

  let myFunction = function () { }

  let myObject = { name: 'asia',}

  // a functions prototype is the objects instance that will become the prototype 
  // for all objects created using this function as a constructor
  display(myFunction.prototype);
  
  display(myObject.prototype); // undefined

  // an objects prototype is the object instane from which the object is inherited
  display(myObject.__proto__);

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  let asi = new Person('asi', 'grab');
  let mac = new Person('mac', 'gouy');
  
  display(Person.prototype);
  display(asi.__proto__);

  display(Person.prototype === asi.__proto__); // true

  Person.prototype.age = 22; // it changes value of age to all object made from Person constructor and prototype itself
  mac.__proto__.age = 33; // it changes value of age to all object made from Person constructor and prototype itself
  mac.age = 99; // it changes only mac's age (the instance properties override the prototype properties)

  display(asi, mac);
  display(mac.age); // new value
  display(mac.__proto__.age); // prototype value

  display(asi.hasOwnProperty('age')); // false
  display(asi.age); // gives a value

  Person.prototype = { age: 77 }; // change the object which person points to, from now every new Person would inherite form it, but previous ones stay as they were
  
})();
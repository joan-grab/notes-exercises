'use strict'; 
(function() {

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function() { return this.age >= 18; };
  }

  let person1 = new Person('Asi', 'Grab', 29);
  let person2 = new Person('Jim', 'Cooper', 45);

  display(person1, person2);

})();
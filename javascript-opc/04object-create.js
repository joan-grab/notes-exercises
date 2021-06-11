'use strict'; 
(function() {

  let person1 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 17,
    isAdult: function() { return this.age >= 18; },
  };

  let person2 = Object.create(
    Object.prototype,
    {
      firstName: {value: 'Jim', enumerable:true, writable:true, configurable:true},
      lastName: {value: 'Cooper', enumerable:true, writable:true, configurable:true},
      age: {value: 45, enumerable:true, writable:true, configurable:true},
    }
  );

  display(person1, person2);

})();
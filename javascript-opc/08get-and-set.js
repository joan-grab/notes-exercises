'use strict'; 
(function() {

  let person = {
    name: {
      firstName: 'Jim',
      lastName: 'Cooper',
    },
    age: 17,
  };

  Object.defineProperty(person, 'fullName', {
    get: function() {
      return this.name.firstName + ' ' + this.name.lastName;
    },
    set: function(value) {
      const nameParts = value.split(' ');
      this.name.firstName = nameParts[0];
      this.name.lastName = nameParts[1];
    }
  });

  person.fullName = 'Fred Jones';

  display(person.fullName);
  display(person.name.firstName);
  display(person.name.lastName);

})();
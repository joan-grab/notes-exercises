'use strict'; 
(function() {

  let person1 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 17,
    isAdult: function() { return this.age >= 18; },
    isYoung() {return this.age < 18; },
  };

  let person2 = { };

  let healthStats = {
    height: 68,
    weight: 150,
  }

// build-in object methods

// properties 
  display(Object.keys(person1));

  for (let propertyName in person1) {
    display(propertyName);
  }

// copy or merge properties (from second parameter to first one)
  Object.assign(person2, person1);
  display(person2);

  display(person1 === person2); // false - comparing objects refers to memory address

  Object.assign(person1, healthStats); // merge when properties differ
  display(person1);

  function mergeHealthStats(person, healthStats) {
    return Object.assign(person, healthStats);
  }

  let mergedPerson = mergeHealthStats(person1,healthStats);
  display(mergedPerson, person1); // both get merged

  let newMergedPerson = Object.assign({}, person2, healthStats); // to avoid mutating original objects add empty object as first parameter
  display(newMergedPerson, person2);
})();
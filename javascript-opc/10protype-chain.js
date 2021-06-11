'use strict'; 
(function() {

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, 'fullName', {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      enumerable: true
    });
  }

  let asi = new Person('asi', 'grab', 20);
    
  display(asi.__proto__); // Person
  display(asi.__proto__.__proto__); // Object
  display(asi.__proto__.__proto__.__proto__); // Null

  function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age); // !!!!!!! important
    this._enrolledCourses = [];
    this.enroll = function(courseId) {
      this._enrolledCourses.push(courseId);
    };
    this.getCourses = function() {
      return this.fullName + "'s enrolled courses are: " + 
        this._enrolledCourses.join(', ');
    };
  }

  // display(Student.prototype.constructor); // its Student
  Student.prototype = Object.create(Person.prototype);     // !!!!!!! important
  // display(Student.prototype.constructor); // its Person
  Student.prototype.constructor = Student;                 // !!!!!!! important
  // display(Student.prototype.constructor); // its Student again

  let mac = new Student('mac', 'gouy', 15);

  display(mac);

  display(mac.__proto__); // Student
  display(mac.__proto__.__proto__); // Person
  display(mac.__proto__.__proto__.__proto__); // Object
  display(mac.__proto__.__proto__.__proto__.__proto__); // Null

  mac.enroll('ewfwe');
  mac.enroll('yurt');
  mac.enroll('ewffdgdwe');

  display(mac.getCourses());

})();
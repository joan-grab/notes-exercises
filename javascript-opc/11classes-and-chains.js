'use strict'; 
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }
    set fullName(fullName) {
      const nameParts = value.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
    isAdult() { 
      return this.age >= 18; 
    }    
  }

  Object.defineProperty(Person.prototype, 'fullName', {enumerable: true}); // change property of class

  let asi = new Person('asi', 'grab', 20);
  display(asi);

  class Student extends Person {       // set Person to inherit from
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age); // calls contructor from parent class 
      this._enrolledCourses = [];
    }
    static university = 'WZKO';
    static fromPerson(person) {    // static function and properties  can be called outside the class
      return new Student(person.firstName, person.lastName, person.age);
    }
    enroll(courseId) {
      this._enrolledCourses.push(courseId);
    };
    getCourses() {
      return this.fullName + "'s enrolled courses are: " + 
        this._enrolledCourses.join(', ');
    };
  }

  let mac = new Student('mac', 'gouy', 15);

  let asiStudent = Student.fromPerson(asi); // create a student from existing person

  display(Student.university);

})();
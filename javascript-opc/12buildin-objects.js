'use strict'; 
(function() {

// static Math function (without creating new object)
  display(Math.PI);
  display(Math.round(4.79));
  display(Math.max(2, 67, 34));

// date
  let date = new Date('2050-03-25T13:01:30Z'); // could be differently interpreted by different browsers
  let date1 = new Date(2050,2,25,13,1,30, 50); // better (month are counted from 0 -> Jenuary=0)
  let date2 = new Date(2051,2,25,13,1,30, 50);

  display(date1.toString());
  display(date2-date1); // difference of time in miliseconds

// reg-ex
  function checkPasswordComplexity(password) {
    let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$');
// or
    let regex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    return regex.test(password);
  }
  display(checkPasswordComplexity('weak')); //false
  display(checkPasswordComplexity('Stronger123')); //true

  function findAlerts(logData) {
    let regex = /ERROR(.*?):(.*?);/g;

    let result = regex.exec(logData);
    while (result !== null) {
      display(result[0]);
      display(result[1]);
      display(result[2]);
      result = regex.exec(logData);
    };
  }

  let logData = 'INFO: OK, ERROR(LOW):STH GO WRONG, ERROR(HIGH):EVERYTHING IS WRONG';
  findAlerts(logData);
  console.log(findAlerts(logData));

})();
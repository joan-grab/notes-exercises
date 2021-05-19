const X = function () {
  // "this" here is the caller of X
};

const Y = () => {
  // "this" here is NOT the caller of Y

  // It's the same "this" found in Y's scope
};

// "this" here is "exports"

this.id = 'exports';

const testerObj = {
  func1: function () {
    console.log('func1', this);
  },

  func2: () => {
    console.log('func2', this);
  },
};

testerObj.func1();
testerObj.func2();

const square = (a) => {
  return a * a;
};

// const square = (a) => a * a;
// const square = a => a * a;

[1, 2, 3, 4].map(a => a * a);

// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


// const circle = {
//   label: 'circleX',
//   radius: 2,
// };
//
// const circleArea = ({ radius }) =>
//   (PI * radius * radius).toFixed(2);
//
// console.log(
//   circleArea(circle)
// );



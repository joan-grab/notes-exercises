// Medium - array exercises 
// https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-arrays-c44eea129fba

// ex.1. fill

/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/
const fill = (arraySize, value) => {
    const array = [];
    let i = 0;
    for (i=0; i<arraySize; i++) {
        array.push(value);
    }
    return (array);
   }

   const data = 3;
   const valueToFill = 'a';
   console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

   // solution:
   // export const fill = (arraySize, value) => new Array(arraySize).fill(value);

// ex. 2. reverse

/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
const reverse = (array) => {
    const arr1 = [];
    array.forEach(e => arr1.unshift(e));
    return arr1;
   }
   const data = [1, 2, 3];
   console.log(reverse(data)); // [3, 2, 1]

   // easiest solution (it was recomended to do not use this function):
    // const reversed = array1.reverse();
    // console.log('reversed:', reversed);

// ex.3. filter

/** 
  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - An array of any elements 
  * @returns {Array} 
*/
const compact = (array) => {
    const arr1 = [];
    array.forEach(e => {if (e>0) {
        arr1.push(e); 
        console.log(arr1);
    }});
    return arr1;
   }
   const data = [0, 1, false, 2, undefined, '', 3, null];
   console.log(compact(data)) // [1, 2, 3]

   //solution:
   //export const compact = (array) => array.filter((el) => el);

// ex.4. form pairs

/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * Task Complexity: 2 of 5 
  * @param {Array} array - a deep array of pairs 
  * @returns {Array} 
*/
const fromPairs = (array) => {
    let obj = {};
    array.forEach(e => obj[e[0]] = e[1] );
    return obj;
   }
   const data = [['a', 1], ['b', 2]];
   console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }

   //solution
//    export const fromPairs = (array) => array.reduce((acc, value) => {
//     if (Array.isArray(value)) {
//       acc[value[0]] = value[1];
//     }
//     return acc;
//   }, {});

// ex.5. Without 

/** 
  * Task description: Write a method that returns an array without listed values 
  * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3] 
  * Task Complexity: 2 of 5 
  * @param {Array} array - Array of primitive data types 
  * @param {?} args list of values to remove 
  * @returns {Array} 
*/
const without = (array, ...args) => {
    let arr1 = array.filter(e => !(args.includes(e)));
    return arr1;
   }
   const data = [1, 2, 3, 1, 2];
   console.log(without(data, 1, 2)); // [3]

// ex.6. Unique

/** 
  * Task description: Write a method that returns a duplicate-free array 
  * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3] 
  * Task Complexity: 2 of 5 
  * @param {Array<string | number>} array - Array of primitive data types 
  * @returns {Array} 
*/
const unique = (array) => {
    let arr1 = [];
    array.forEach((e,i) => {
        if (array.indexOf(e) === i) {arr1.push(e)}
    });
    return arr1;
   }
   const data = [1, 2, 1, 2, 3];
   console.log(unique(data)); // [1, 2, 3]

// solution:

//export const unique = (array) => Array.from(new Set(array));

//export const unique2 = (array) => array.filter((element, id) => array.indexOf(element) === id);

// ex.7. is equal

/** 
  * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical. 
  * Expected Result: ([1, 2, 3], [1, 2, 3]) => true 
  * Task Complexity: 2 of 5 
  * @param {Array} firstArray - Array of primitive data types 
  * @param {Array} secondArray - Array of primitive data types 
  * @returns {boolean} 
*/
const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  } 

  for (let i=0; i<firstArray.length; i++) {
    console.log(firstArray[i], secondArray[i]);
    if (firstArray[i] !== secondArray[i]) {
      console.log(firstArray[i], secondArray[i]);
      return false;
    }
  }
  return true;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false

//solution 
// export const isEqual = (firstArray, secondArray) => {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }

//   const compared = firstArray.map((el, id) => secondArray[id] === el);

//   return !compared.includes(false);
// };

// ex.8. Flatten 

/** 
  * Task description: Write a method that turns a deep array into a plain array 
  * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5] 
  * Task complexity: 3 of 5 
  * @param {Array} array - A deep array 
  * @returns {Array} 
*/
const flatten = (array) => {
  let arr1 = [];
  let arrFlat = [];
  array.forEach(el => {
    if (Array.isArray(el)) {
      (flatten(el)).forEach(e => {
        arrFlat.push(e);
      });
   } else {
      arrFlat.push(el);
    }
  });
  return arrFlat;
 }
 const data = [1, 2, [3, 4, [5]]];
 console.log(flatten(data)); // [1, 2, 3, 4, 5]

 //solution:
 //export const flatten = (array) => array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

// ex.9. Chunk

/** 
  * Task description: Write a method that splits an array into parts of determined size 
  * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]] 
  * Task complexity: 3 of 5 
  * @param {Array} array - An array of any elements 
  * @param {number} size - size of chunks 
  * @returns {Array} 
*/
const chunk = (array, size) => {
  let arr = [];
  for (let i=0; i<array.length; i+=size) {
    arr.push(array.slice(i, i+size));
  }
  return arr;
 }
 const data = [1, 2, 3, 4, 5, 6, 7];
 console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
 console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

// ex. 10. Intersection

/** 
  * Task description: Write a method that creates an array of unique values that are included in all given arrays 
  * Expected Result: ([1, 2], [2, 3]) => [2] 
  * Task complexity: 4 of 5 
  * @param {?} arrays - Arrays of primitive data types 
  * @returns {Array} 
*/
const intersection = (...arrays) => {
  let all = [];
  arrays[0].forEach(el => {
    let check = [];
    check.length = 0;

    for (let i=1; i<arrays.length; i++) {
      let includ = arrays[i].includes(el);
      check.push(includ); 
      if (includ) {
        arrays[i].splice((arrays[i].indexOf(el)),1);
      }
    }

    if (!(check.includes(false))) {all.push(el);}
  });
  return all;
 }
 const arr1 = [1, 2];
 const arr2 = [2, 3];
 const arr3 = ['a', 'b'];
 const arr4 = ['b', 'c'];
 const arr5 = ['b', 'e', 'c'];
 const arr6 = ['b', 'b', 'e'];
 const arr7 = ['b', 'c', 'e'];
 const arr8 = ['b', 'e', 'c'];
 console.log(intersection(arr1, arr2)) // [2]
 console.log(intersection(arr3, arr4, arr5)) // ['b']
 console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']

// other solution
// export const intersection = (...arrays) => {
//   const result = arrays[0].filter((element) => {
//     const indexOfElement = arrays[1].indexOf(element);
//     if (indexOfElement >= 0) {
//       return element;
//     }
//   });
//   if (arrays.length > 2) {
//     intersection(result, ...arrays.slice(2, arrays.length));
//   }
//   return Array.from(new Set(result));
// };


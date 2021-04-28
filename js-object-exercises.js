// Medium - objects exercises 
// https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-objects-8942cc502754

// ex. 1. plain object

/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. 
     ({ a: 1 }) => true, 
     ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */
   const isPlainObject = (element) => {
      if ((typeof(element) === 'object') && (!(Array.isArray(element))) && (element !== null)) {
        return true;
      } else {
        return false;
      }
    };
    const data = { a: 1 };
    console.log(isPlainObject(data)); // true

    // solution
    // export const isPlainObject = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;

// ex. 2. MakePairs

/** 
  * Task description: Write a method that returns a deep array like [[key, value]] 
  * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]] 
  * Task complexity: 1 of 5 
  * @param {Object} object - Any object to transform into array 
  * @returns {Array} - a deep array 
*/
const makePairs = (object) => {
  let arr1 = [];
  for (const pro in object) {
    arr1.push([pro, object[pro]]);
  }
  return arr1;
};
const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]

// solution
// export const makePairs = (object) => Object.entries(object)

// export const makePairs2 = (object) => Object.keys(object).map((el) => [el, object[el]]);

// ex.3. Without

/** 
  * Task description: Write a method that returns new object without provided properties 
  * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 } 
  * Task complexity: 2 of 5 
  * @param {Object} object - Any object 
  * @param {?} args - list of properties to remove from object 
  * @returns {Object} - New object without listed values 
*/
const without = (object, ...args) => {
  args.forEach(el => { 
    if (object.hasOwnProperty(el)) {
      delete object[el];}
  });
  return object;
};
const data = { a: 1, b: 2 };
console.log(without(data, 'b')); // { a: 1 }

// solution
// export const without = (object, ...args) => {
//   const newObject = { ...object };

//   args.forEach((arg) => {
//     delete newObject[arg];
//   });

//   return newObject;
// };

// ex. 4. IsEmpty

/** 
  * Task description: Write a method that makes a shallow check is object empty 
  * Expected Result: ({}) => true, ({ a: undefined }) => true, 
      ({ a: 1 }) => false 
  * Empty values: '', null, NaN, undefined 
  * Task complexity: 2 of 5 
  * @param {Object} object - Object with values of primitive data types 
  * @returns {boolean} 
*/
const isEmpty = (object) => {
  for (el in object) {
    if (object[el] === undefined) {
      return true;
    } else {
      return false;
    }
  }
};
const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true

// solution
// export const isEmpty = (object) => {
//   const objectKeys = Object.keys(object);
//   if (objectKeys.length === 0) {
//     return true;
//   }

//   return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
// };

// ex.5. IsEqual

/** 
  * Task description: Write a method that makes a shallow compare of two objects 
  * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true 
  * Task complexity: 2 of 5 
  * @param {Object<string | number>} firstObj - Object with values of primitive data types 
  * @param {Object<string | number>} secondObj - Object with values of primitive data types 
  * @returns {boolean} 
*/
const isEqual = (firstObject, secondObject) => {

  let returnVal = true;

  Object.keys(firstObject).forEach((e,i) => {
    if (!(e === Object.keys(secondObject)[i])) {returnVal = false;}
    if (!(firstObject[e] === secondObject[e])) {returnVal = false;}
  });
  
  return returnVal;
}
const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false

// solution
// const isEqual = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);
//   const secondObjKeys = Object.keys(secondObj);

//   if (firstObjKeys.length !== secondObjKeys.length) {
//     return false;
//   }

//   for (const prop in firstObj) {
//     if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
//       return false;
//     }
//   }

//   return true;
// };

// ex.6. Invoke

/** 
  * Task description: Write a method that invokes an array method on a specific path 
  * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3] 
  * Task complexity: 3 of 5 
  * @param {Object} object 
  * @param {String} path - path in an object to property 
  * @param {String} func - function to invoke 
  * @param {Array} [args] - list of args 
  * @returns {?} 
*/
const invoke = (object, path, func, args) => {

  const array = getArray(object, path);

  return array[func](...args);

};

const getArray = (object,path) => {
  let array= null;
  path.split('.').forEach(e => {

    let objectValue = object[e];

    if (Array.isArray(objectValue)) {
      array = objectValue;
    }else{
      object = objectValue;
    }
  });
  return array;
}

const data = { a: { b: [1, 2, 3] } }
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

// solution
// export const invoke = (object, path, func, args) => {
//   const splittedPath = path.split('.');

//   const target = splittedPath.reduce((acc, key) => {
//     acc = acc[key] ? acc[key] : object[key];
//     return acc;
//   }, {});

//   return Array.prototype[func].apply(target, args);
// };

// ex. 7. IsEmpty

/** 
  * Task description: Write a method that makes a deep check is an object empty 
  * Empty values: '', null, NaN, undefined, [], {} 
  * Expected Result: ({}) => true, 
      ({ a: { b: undefined } }) => true, 
      ({ a: { b: [] } }) => true 
  * Task complexity: 3 of 5 
  * @param {?} element - Object with values of any data types 
  * @returns {boolean} 
*/
const isEmptyDeep = (element) => {
  let result = true;
  
 for (let e in element) {

   console.log(e, ': ', element[e] ,"type: " , typeof element[e]);
   if ((typeof element[e] === 'object') && (element[e] !== null)){
     console.log('jestem objektem, sprawdam dalej');
    if ((Array.isArray(element[e])) && (element[e].length !== 0)) {
      console.log('jestem pelna tablica');
      result = false;
    } else {

      result = isEmptyDeep(element[e]);
    }
  
   } else if ((element[e] !== '') && 
              (element[e] !== null) && 
              (element[e] !== NaN) && 
              (element[e] !== undefined)) {
    console.log('nie jestem grupy nan');
    result = false;
   }
 }
return result;
};
const data = { a: { b: undefined } };
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep({}));
console.log(isEmptyDeep({ a: { b: []} }));
console.log(isEmptyDeep({ a: { b: 'maryna' } }));

// solution

// export const isEmptyDeep = (element) => {
//   if (element === null) {
//     return true;
//   }
//   if (Array.isArray(element)) {
//     if (element.length === 0) {
//       return true;
//     }

//     let result;
//     for (let i = 0; i < element.length; i += 1) {
//       if (typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
//         || (typeof element[i] === 'string' && element[i] !== '')) {
//         result = false;
//         break;
//       }
//       if (Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)) {
//         result = isEmptyDeep(element[i]);
//         break;
//       }

//       result = true;
//     }

//     return result;
//   }
//   if (typeof element === 'object') {
//     const objectKeys = Object.keys(element);
//     if (objectKeys.length === 0) {
//       return true;
//     }

//     let result;
//     for (let i = 0; i < objectKeys.length; i += 1) {
//       const value = element[objectKeys[i]];

//       if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
//         || (typeof value === 'string' && value !== '')) {
//         result = false;
//         break;
//       }
//       if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
//         result = isEmptyDeep(value);
//         break;
//       }

//       result = true;
//     }

//     return result;
//   }
// };

// Ex. 8. IsEqualDeep 

/** 
  * Task description: Write a method that makes a deep compare of two objects 
  * Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true 
  * @param {Object} firstObj - Object of any values
  * @param {Object} secondObj - Object of any values
  * @returns {boolean} 
*/
const isEqualDeep = (obj1, obj2) => {

  let result = true;
  
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === 'object' && obj1[key] !== null &&
          typeof obj2[key] === 'object' && obj2[key] !== null) {
        result = isEqualDeep(obj1[key], obj2[key]);
      } else if (obj1[key] !== obj2[key]) {
        result = false;
      }
    } else {
      result = false;
    }
  }
return result;
};
const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false

// solution

// export const isEqualDeep = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);
//   const secondObjKeys = Object.keys(secondObj);

//   if (firstObjKeys.length === 0 && secondObjKeys.length === 0) {
//     return true;
//   }

//   const compareList = firstObjKeys.map((key) => {
//     const valueOfFirstObject = firstObj[key];
//     const valueOfSecondObject = secondObj[key];
//     if ((Number.isNaN(valueOfFirstObject) && Number.isNaN(valueOfSecondObject))
//       || (valueOfFirstObject === null && valueOfSecondObject === null)) {
//       return true;
//     }
//     if (valueOfFirstObject === valueOfSecondObject) {
//       return true;
//     }
//     if (Array.isArray(valueOfFirstObject) && Array.isArray(valueOfSecondObject)) {
//       return isArraysEqualDeep(valueOfFirstObject, valueOfSecondObject);
//     }
//     if (typeof valueOfFirstObject === 'object' && typeof valueOfSecondObject === 'object') {
//       return isEqualDeep(valueOfFirstObject, valueOfSecondObject);
//     }

//     return false;
//   });

//   return !compareList.includes(false) && !compareList.includes(undefined);
// };

// const isArraysEqualDeep = (firstArray, secondArray) => {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }

//   const compared = firstArray.map((el, id) => {
//     if (Array.isArray(el) && Array.isArray(secondArray[id])) {
//       return isArraysEqualDeep(el, secondArray[id]);
//     }
//     if (typeof el === 'object' && typeof secondArray[id] === 'object') {
//       return isEqualDeep(el, secondArray[id]);
//     }

//     return secondArray[id] === el;
//   });

//   return !compared.includes(false);
// };

// ex. 9. Intersection

/** 
  * Task description: Write a method that finds shallow intersections of objects 
  * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 } 
  * @param {Object<string | number>} firstObj - Object with values of primitive data types 
  * @param {Object<string | number>} secondObj - Object with values of primitive data types 
  * @returns {Object} 
*/
const intersection = (firstObject, secondObject) => {

  let result = {};

  for (let key in firstObject) {
    if (secondObject.hasOwnProperty(key) && firstObject[key] === secondObject[key]) {
      result[key] = firstObject [key];
    }
  }
  
  return result;
};
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }

// solution

// export const intersection = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);

//   return firstObjKeys.reduce((acc = {}, key) => {
//     if (firstObj[key] === secondObj[key]) {
//       acc = {
//         ...acc,
//         [key]: firstObj[key],
//       };
//     }

//     return acc;
//   }, {});
// };

// ex. 10. IntersectionDeep

/** 
  * Task description: Write a method that finds all intersections of objects
  * Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } } 
  * @param {Object} firstObj - Object with values of any data types
  * @param {Object} secondObj - Object with values of any data types
  * @returns {Object} 
*/
const intersectionDeep = (firstObject, secondObject) => {
  let result = {};

  for (let key in firstObject) {
    if (secondObject.hasOwnProperty(key) && firstObject[key] === secondObject[key]) {
      result[key] = firstObject[key];
    } else if (secondObject.hasOwnProperty(key) &&
               typeof firstObject[key] === 'object' &&
               typeof secondObject[key] === 'object' &&
               firstObject[key] !== null &&
               secondObject[key] !== null) {
      result[key] = intersectionDeep(firstObject[key], secondObject[key]);

    }
  }
  
  return result;
};
const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

// solution

// export const intersectionDeep = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);

//   return firstObjKeys.reduce((acc = {}, key) => {
//     if (firstObj[key] === secondObj[key]) {
//       acc = {
//         ...acc,
//         [key]: firstObj[key],
//       };
//     }
//     if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
//       const isEqualArrays = isEqualDeep(firstObj[key], secondObj[key]);

//       if (isEqualArrays) {
//         acc = {
//           ...acc,
//           [key]: firstObj[key],
//         };
//       }
//     } else if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object') {
//       const hasIntersection = intersectionDeep(firstObj[key], secondObj[key]);

//       if (Object.keys(hasIntersection).length !== 0) {
//         acc = {
//           ...acc,
//           [key]: hasIntersection,
//         };
//       }
//     }
//     return acc;
//   }, {});
// };

 

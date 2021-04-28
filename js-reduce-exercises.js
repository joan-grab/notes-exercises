// Array Reduce Exercises
// https://coursework.vschool.io/array-reduce-exercises/

// ex. 1. Turn an array of numbers into a total of all the numbers

function total(arr) {
    return arr.reduce((acc, val) => acc+val);
 }
 
 console.log(total([1,2,3])); // 6

// ex. 2. Turn an array of numbers into a long string of all those numbers

function stringConcat(arr) {
    return arr.reduce((acc, val) => acc+val.toString());
 }
 
 console.log(stringConcat([1,2,3])); // "123"

// ex. 3. Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    let sum = 0;
    return arr.reduce((acc, val) => {
        if (val.voted) {
            sum++;
        };
        return sum;
    }, 0);   
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7

// ex. 4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once


function shoppingSpree(arr) {
   return arr.reduce((acc, val) => acc+val.price, 0);  
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// ex. 5. Given an array of arrays, flatten them into a single array

function flatten(arr) {
   return arr.reduce((acc, val) => acc.concat(val));   
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// ex. 6. Given an array of potential voters, return an object representing the results of the vote

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   let result = {   numYoungVotes: 0,
                    numYoungPeople: 0,
                    numMidVotes: 0,
                    numMidsPeople: 0,
                    numOldVotes: 0,
                    numOldsPeople: 0 
  };
  console.log(result);
   arr.reduce((acc,val) => {
        if (val.age < 30) {
            console.log(val.name, ': <30');
            if (val.voted) {
                result.numYoungVotes++;
                result.numYoungPeople++;
            } else {
                result.numYoungPeople++;
            }
            console.log(result.numYoungVotes, result.numYoungPeople);
        }
        if (val.age >= 30 && val.age > 40) {
            console.log(val.name, ': >30');
            if (val.voted) {
                result.numMidVotes++;
                result.numMidsPeople++;
            } else {
                result.numMidsPeople++;
            }
            console.log(result.numMidVotes, result.numMidsPeople);
        }
        if (val.age >= 40) {
            console.log(val.name, ': >40');
            if (val.voted) {
                result.numOldVotes++;
                result.numOldsPeople++;
            } else {
                result.numOldsPeople++;
            }
        }
        
   },0);
   return result;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/



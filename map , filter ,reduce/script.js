// map , filter and reduce
// what is map() ?

/* ANS:
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()


*/
// what is map() ?
const nums = [1, 2, 3, 4];
const multiplyThree = nums.map((num, i, arr) => {
  return num * 3;
});
console.log(multiplyThree); //output: [ 3, 6, 9, 12 ]

/*
const nums = [1, 2, 3, 4];
const multiplyThree = nums.map((num, i, arr) => {
  return num * 3 + i;
});
 console.log(multiplyThree); //output:[ 3, 7, 11, 15 ]

*/

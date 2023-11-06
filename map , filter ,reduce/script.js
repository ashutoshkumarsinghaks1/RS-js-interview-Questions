// map , filter and reduce
// what is map() ?

/* ANS:
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

*/
// what is map() ?
const nums = [1, 2, 3, 4];
const multiplyThree = nums.map((num, i, arr) => {
  return num * 3;
});
console.log(multiplyThree);

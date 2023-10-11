// map , filter and reduce
// what is map() ?

/*

const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => {
  return num * 3 + i;
});

console.log(multiplyThree);

*/

/*
// what is filter()  ?

const nums = [1, 2, 3, 4];

const moreThanTwo = nums.filter((num) => {
  return num > 2;
});

console.log(moreThanTwo);

*/

/*
//what is reduce() ?

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);
*/

// polyfills for map();
// syntax => Array.map(num,i,arr) =>{});

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4];

const multiplyThree = nums.myMap((num, i, arr) => {
  return num * 3;
});

console.log(multiplyThree);

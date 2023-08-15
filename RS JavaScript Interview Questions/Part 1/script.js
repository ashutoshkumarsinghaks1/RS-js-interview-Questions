//( Var , let  const) - Hoisting , Scoping ,Shadowing and more
//var vs let vs const
//  Scope
/* function name() {

 }
 */

/*
 {

}
*/

/*

var a = 5;
 console.log(a);

 */

/*
 var is functional scope
 but let and const are block scope
 */

/*
 {
  var a = 5;
 }
  console.log(a);

  output: 5
  
  */

/* 
{
  let a = 5;
}
console.log(a);

output :  a is not defined
*/

/*
{
  let a = 5;
  console.log(a);
}

output : 5
*/

/*
 {
  const a = 5;
  console.log(a);
 }

 output: 5
 */

/*
{
  const a = 5;
}
console.log(a);
outupt:  a is not defined
*/

/*
***********variable shadowing**********************
function test() {
  let a = "Hello;";

  if (true) {
    let a = "Hi";
    console.log(a);
  }
  console.log(a);
}
test();
output : Hi
         Hello
*/

/*
function test() {
  var a = "Hello;";
  let b = "Bye";

  if (true) {
    let a = "Hi";
    let b = "Goodbye";
    console.log(a);
    console.log(b);
  }
}
test();
output:Hi
        Goodbye

 we can over shadow var varible by let but not let variable with variable
 */

/*
function test() {
  var a = "Hello;";
  let b = "Bye";

  if (true) {
    let a = "Hi";
    var b = "Goodbye";
    console.log(a);
    console.log(b);
  }
}
test();

output: Identifier 'b' has already been declared
we can over shadow var varible by let but not let variable with variable
humlog var se let ko overshadow nhi kr skte .
*/

// ****** Declaration *********
/*
var a;
var a;
var a;

output : nothing
we can declare  var a much we can
humlog var ko jitna chahe declare kr skte h.No pronlem
*/
/*
let a;
let a;
output: Identifier 'a' has already been declared
we cannot declare  let more than once with same variable name.
humlog ek jayada baar nhi kr skte same variable name let se declare.
*/

/*
const a;
const a;
output: Missing initializer in const declaration
we cannot also declare const we same variable name again.
humlog const ko bhi redeclare nhi kr skte.
*/

/*

let a;
{
  let a;
}

output: nothing
but this is completely fine there is nothing error,
it is because of shadoeing as it is different scope.
*/

//************** Declaration without initialisation  ****************************** */
/*

var a;
output : nothing
but runs fine.
*/

/*
let a;
output : nothing
but runs fine.
*/

/*

const a;
output: Missing initializer in const declaration
// Note: we need to provide sum value to variable in cosnt we can't declare it without value

*/

//************** Re-initialisation ****************** */

/*
var a = 5;
a = 6;
 it is working fine
*/

/*
let a = 5;
a = 6;
it is 
 it is also working fine
*/

/*
const a = 5;
a = 6;

output: TypeError: Assignment to constant variable.

*/

//****************** Hoisting ***************************** */
/*
During the creation phase javascript engine moves your variables and function declaration to the top of your code and this is 
called hoisting.
*/
/*
console.log(count);
var count = 1;

ouput :undefined 
but not error 
because  javascript looks at this as 

var count;
console.log(count);
count=1;
*/

/*
console.log(count);
let count = 1;
output:ReferenceError: Cannot access 'count' before initialization

note: we can see error  and can say it is not hoisted , but we'are wrong they are hosted 
in temporal dead zone .
*/

/*
console.log(count);
let count = 1;
var count2 = 2;

// Notes: Defintion Temporal dead zone => temporal dead zone is the  time between te declaration and initialisation of
let and const variables
*/

//hoisting interview questions
/*
//Q.1 what is the value of console.log(a)
function abc() {
  console.log(a);
  var a = 10;
}
abc();

output: undefined
*/

/*
Q2. what is the value of console.log(a,b,c)
function abc() {
  console.log(a, b, c);

  const c = 30;
  let b = 20;
  var a = 10;
}
abc();

output:Cannot access 'b' before initialization
*/

/*
How to avoid temporal dead zone in JavaScript?
ans:To avoid the Temporal Dead Zone, it's important to always declare your variables before using them. 
This means that you should declare your variables
 at the top of their block scope, before any other statements.


 What is the temporal dead zone in es6?
Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.
 Temporal Dead Zone starts when the code execution enters the block which contains the let or const declaration
  and continues until the declaration has executed.

*/

/*
========================================================
IIFE
========================================================
-Immediately -Invoked Function Expression
-Older approach - new Modules
-Simple approach to avoid global scope pollution
-Good way of protecting the scope of your functions and the variables within it. 

Global namespace, extra steps
*/
// const num1 = 30;
// const num2 = 50;

// function add() {
//   console.log(`the result is: ${num1 + num2}`);
// }

// add();

// (function () {
//   const num2 = 40;
//   const num3 = 50;
//   console.log(`the result is: ${num2 + num3}`);
// })();
// console.log(num1);

// (function () {
//   const num2 = 40;
//   const num3 = 50;
//   console.log(`the result is: ${num2 + num3}`);
// })();

// //Pass arguments
// (function (num2, num3) {
//   console.log(`the result is: ${num2 + num3}`);
// })(500, 300);

// //Return/passing to variable

// const result = (function (num3, num4) {
//   console.log(`The result is: ${num3 + num4}`);
//   return num3 + 2990; //Returns after invoked
// })(500, 600); //Passed as an argument

// console.log(result);

/*
========================================================
Hoisting
========================================================
-Function and var declartions are hoisted
-It is safer to access only after initialized
*/

// hoising
// display(); //access declaration before initializing the function
// console.log(display);

// // console.log(fistName);
// console.log(random); //throws only the variable and not value
// //

// // Variables and function below

// const fistName = 'John';
// let lastName = 'Jordan';
// var random = 'random';

// function display() {
//   console.log('Hello world');
// }
// console.log(fistName);

/*
========================================================
Closure
========================================================
-closure gives you an access to an outer function's scope from an inner function
-makes private variables with closures
*/

function outer() {
  function inner() {
    console.log(`Hello there, secret is: `);
  }
  // return outer;
  inner();
}
outer();

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
const num1 = 30;
const num2 = 50;

function add() {
  console.log(`the result is: ${num1 + num2}`);
}

add();

(function () {
  const num2 = 40;
  const num3 = 50;
  console.log(`the result is: ${num2 + num3}`);
})();
console.log(num1);

(function () {
  const num2 = 40;
  const num3 = 50;
  console.log(`the result is: ${num2 + num3}`);
})();

//Pass arguments
(function (num2, num3) {
  console.log(`the result is: ${num2 + num3}`);
})(500, 300);

//Return/passing to variable

const result = (function (num3, num4) {
  console.log(`The result is: ${num3 + num4}`);
  return num3 + 2990; //Returns after invoked
})(500, 600); //Passed as an argument

console.log(result);

/*

=   assignment operator for assigning to a variable
==  is this equal to that
=== is this and the coercion of this equal to that and the coercion of that?

*/

var studentName1 = "Frank";
var studentName2 = "Frank";


console.log(studentName1 == studentName2); //true
console.log(studentName1 === studentName2); //true

// If we change these to objects

var student3 = {name: "Frank"};
var student4 = {name: "Frank"};

console.log(student3 == student4);
console.log(student3 === student4);

var num1 = "40"
var num2 = 40;

console.log(num1 == num2); //true coerced to a number 
console.log(num1 === num2); // false
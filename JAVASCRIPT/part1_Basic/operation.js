/*
===============================================
   JavaScript Operators - Complete Concept
===============================================

👉 1. Arithmetic Operators
👉 2. Increment / Decrement Operators
👉 3. Comparison Operators
*/

// --------------------
// 1. Arithmetic Operators
// --------------------
let score = 102;
let bonus = 25;
let totalScore = score + bonus; // variable reference
console.log("Total Score:", totalScore);

let addition = 4 + 5; // direct values
let subtraction = 9 - 3;
let multiplication = 3 * 8;
let division = 8 / 2;
let remainder = 9 % 2; // modulus
let exponent = 2 ** 4; // power

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Remainder:", remainder);
console.log("Exponent:", exponent);

// --------------------
// 2. Increment / Decrement
// --------------------
let MyScore = 110;
MyScore++; // post-increment
console.log("After Increment:", MyScore);

let credits = 58;
credits--; // post-decrement
console.log("After Decrement:", credits);

// --------------------
// 3. Comparison Operators
// --------------------
/*
==   → Equal to (value only)
===  → Strict Equal to (value + type)
!=   → Not equal to (value only)
!==  → Strict Not equal to (value + type)
>    → Greater than
<    → Less than
>=   → Greater than or equal to
<=   → Less than or equal to
*/

let a = 10;
let b = "10";

console.log("a == b  :", a == b); // true (only value)
console.log("a === b :", a === b); // false (value + type must match)
console.log("a != b  :", a != b); // false (values equal)
console.log("a !== b :", a !== b); // true (types different)

console.log("a > 5   :", a > 5); // true
console.log("a < 5   :", a < 5); // false
console.log("a >= 10 :", a >= 10); // true
console.log("a <= 9  :", a <= 9); // false

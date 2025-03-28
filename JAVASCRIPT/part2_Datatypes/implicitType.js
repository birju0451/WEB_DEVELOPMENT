/*
Implicit and Explicit in JavaScript
JavaScript provides implicit and explicit type conversion when working with different data types.

1. Implicit Type Conversion (Type Coercion)
Implicit conversion happens automatically when JavaScript converts one data type into another.

*/

//🔹 Example 1: String + Number (Concatenation)
let result1 = "5" + 2;  // "5" is a string, so 2 is converted to "2"
console.log(result1);    // Output: "52" (string)
console.log(typeof result1); // Output: string
//👉 Here, JavaScript implicitly converts 2 into "2" and performs string concatenation.


//🔹 Example 2: String - Number (Arithmetic Operation)
let result2 = "10" - 5;  // "10" (string) is converted to number 10
console.log(result2);     // Output: 5 (number)
console.log(typeof result2); // Output: number
//👉 Since - (subtraction) is not used for strings, JavaScript implicitly converts "10" into a number.



//🔹 Example 3: Boolean to Number
let result3 = true + 2;  // true is converted to 1
console.log(result3);     // Output: 3
console.log(typeof result3); // Output: number
//👉 Here, true is implicitly converted to 1, and 1 + 2 = 3


//🔹 Example 4: Null to Number
let result4 = null + 5; // null is converted to 0
console.log(result4);    // Output: 5
//👉 null is implicitly converted to 0.
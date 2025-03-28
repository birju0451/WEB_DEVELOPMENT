/*
2. Explicit Type Conversion (Type Casting)
Explicit conversion happens when we manually convert a data type using JavaScript functions like:

Number()
String()
Boolean()
parseInt(), parseFloat()
*/

//🔹 Example 1: String to Number

let str = "123";
let num = Number(str); // Converts string "123" to number 123
console.log(num);       // Output: 123
console.log(typeof num); // Output: number


//🔹 Example 2: Number to String
let num1 = 50;
let str1 = String(num1); // Converts number 50 to string "50"
console.log(str1);       // Output: "50"
console.log(typeof str1); // Output: string




//🔹 Example 3: Boolean Conversion
console.log(Boolean(0));       // Output: false
console.log(Boolean(1));       // Output: true
console.log(Boolean("hello")); // Output: true (non-empty string is true)
console.log(Boolean(""));      // Output: false (empty string is false)
//👉 Any non-zero number or non-empty string is true, while 0, null, undefined, and "" are false.



//🔹 Example 4: Using parseInt() and parseFloat()
let price = "99.99";
console.log(parseInt(price));   // Output: 99 (removes decimal part)
console.log(parseFloat(price)); // Output: 99.99
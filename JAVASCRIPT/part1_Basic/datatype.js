// console.log("chai");  // This line is commented out and won't run

/*
This is a multiline comment.
It allows you to write multiple lines of text inside the comment block.
*/

/* 
/*
===============================================
   JavaScript Data Types - Complete Concept
===============================================
There are 8 data types in JavaScript:
👉 7 Primitive types
👉 1 Reference type (Object)
*/

// 1. STRING - sequence of characters
let name = "Birju";
console.log("String:", name, "Type:", typeof name);
console.log("String: "+name , "Type: "+typeof name)

// 2. NUMBER - integers & floating-point
let age = 25;
let pi = 3.14159;
console.log("Number:", age, pi, "Type:", typeof age);

// 3. BOOLEAN - logical true/false
let isStudent = true;
let hasJob = false;
console.log("Boolean:", isStudent, hasJob, "Type:", typeof isStudent);

// 4. UNDEFINED - variable declared but no value assigned
let x;
console.log("Undefined:", x, "Type:", typeof x);

// 5. NULL - intentional absence of value
let y = null;
console.log("Null:", y, "Type:", typeof y); // ⚠ typeof null = "object" (historical bug)

// 6. SYMBOL - unique and immutable identifiers (ES6)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol:", sym1 === sym2, "Type:", typeof sym1); // false

// 7. BIGINT - large integers beyond safe Number (ES2020+)
let bigNum = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNum, "Type:", typeof bigNum);

// 8. OBJECT - collection of key-value pairs or complex data
let person = {
  name: "Birju",
  age: 25,
  isStudent: true
};
console.log("Object:", person, "Type:", typeof person);

/*
-----------------------------------------------
🔑 Quick Recap:
- Primitive types (immutable): String, Number, Boolean, Undefined, Null, Symbol, BigInt
- Reference type: Object (arrays, functions, dates, etc.)
-----------------------------------------------
*/

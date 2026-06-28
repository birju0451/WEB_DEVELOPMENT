/*
=====================================================
JavaScript Data Types
=====================================================

JavaScript has 8 Data Types.

Primitive Data Types (7)
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

Reference Data Type (1)
8. Object
=====================================================
*/


// ==========================
// 1. String
// ==========================

let name = "Birju";

console.log("----- String -----");
console.log("Value :", name);
console.log("Type  :", typeof name);
console.log();


// ==========================
// 2. Number
// ==========================

let age = 20;
let pi = 3.14;

console.log("----- Number -----");
console.log("Value :", age);
console.log("Value :", pi);
console.log("Type  :", typeof age);
console.log();


// ==========================
// 3. Boolean
// ==========================

let isStudent = true;
let isLoggedIn = false;

console.log("----- Boolean -----");
console.log("Value :", isStudent);
console.log("Value :", isLoggedIn);
console.log("Type  :", typeof isStudent);
console.log();


// ==========================
// 4. Undefined
// ==========================

let city;

console.log("----- Undefined -----");
console.log("Value :", city);
console.log("Type  :", typeof city);
console.log();


// ==========================
// 5. Null
// ==========================

let address = null;

console.log("----- Null -----");
console.log("Value :", address);
console.log("Type  :", typeof address); // object (JavaScript historical bug)
console.log();


// ==========================
// 6. Symbol
// ==========================

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log("----- Symbol -----");
console.log("id1 == id2 :", id1 == id2);
console.log("Type :", typeof id1);
console.log();


// ==========================
// 7. BigInt
// ==========================

let population = 123456789012345678901234567890n;

console.log("----- BigInt -----");
console.log("Value :", population);
console.log("Type  :", typeof population);
console.log();


// ==========================
// 8. Object
// ==========================

let person = {
    name: "Birju",
    age: 20,
    city: "Chennai"
};

console.log("----- Object -----");
console.log("Value :", person);
console.log("Type  :", typeof person);
console.log();


/*
=====================================================
Quick Revision

String      -> Text (e.g., "Hello")
Number      -> Integer & Decimal (e.g., 10, 3.14)
Boolean     -> true / false
Undefined   -> Variable declared but not assigned
Null        -> Intentional empty value
Symbol      -> Unique identifier
BigInt      -> Very large integer
Object      -> Collection of key-value pairs

Primitive Data Types:
✔ String
✔ Number
✔ Boolean
✔ Undefined
✔ Null
✔ Symbol
✔ BigInt

Reference Data Type:
✔ Object
=====================================================
*/
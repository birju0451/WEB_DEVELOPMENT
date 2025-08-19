// =========================
// 1️⃣ Object Operations
// =========================

// Defining an object 'username' with properties
const username = {
  firstname: "birju",
  lastName :"kumar",
  profession: "Student",
  isLoggedin: true,
};

// Modifying an existing property
username.firstname = "Sonu kumar";

// Adding a new property
username.lastName = "Nishad";

// Accessing and displaying properties
console.log(username.firstname); // Output: Sonu kumar
console.log(username["profession"]); // Output: Student
console.log(username.lastName); // Output: Nishad
console.log(username); // Display full object

// Checking the type of 'username' (It should be 'object')
console.log(typeof username); // Output: object

// =========================
// 2️⃣ Working with Date Object
// =========================

// Getting the current date and time
let today = new Date();

console.log(today); // Output: Full date and time
console.log(today.getDate()); // Output: Current day of the month
console.log(today.getMonth()+1); // Output: Month (0-based index, Jan=0)
console.log(today.getFullYear()); // Output: Current year

// Display formatted date correctly
console.log(
  today.getDate() + " " + today.getMonth() + " " + today.getFullYear()
);

// =========================
// 3️⃣ Working with Arrays
// =========================

// Defining an array of hero names
let heros = ["a", "b", "c"];
console.log(heros); // Output: ["a", "b", "c"]

// Another array with mixed data types
let anotherUsername = ["hitesh", true];

console.log(anotherUsername[0]); // Output: hitesh
console.log(anotherUsername[1]); // Output: true

// =========================
// 4️⃣ Type Coercion and Typecasting
// =========================

// Implicit Type Conversion (Type Coercion)
console.log(1 + "1"); // Output: "11" (Number 1 converted to String)
console.log("1" + 1); // Output: "11" (Number 1 converted to String)
console.log(1 + 1.2)

// Explicit Type Conversion

// Converting a string to a number
let isValue = "12";
console.log(isValue); // Output: "12"
console.log(typeof isValue); // Output: string

// Boolean to number conversion
let isValue2 = true;
console.log(isValue2 - 1); // Output: 0 (true is converted to 1, 1 - 1 = 0)
console.log(typeof isValue2); // Output: boolean

// String to Number using `Number()`
let isValue3 = "2";
console.log("---");

let ans = Number(isValue3);
console.log(ans);
console.log(typeof ans);

// Invalid number conversion
let isValue4 = "2abc";
console.log(Number(isValue4)); // Output: NaN (Not a Number)
console.log(typeof isValue4); // Output: string
console.log(typeof Number(isValue4)); // Output: number (but NaN)

// Special cases of `Number()` conversion
console.log(Number(undefined)); // Output: NaN
console.log(Number(null)); // Output: 0

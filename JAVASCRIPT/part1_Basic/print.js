/*
=====================================================
JavaScript Output Methods
=====================================================
JavaScript provides different ways to display output.
1. console.log()
2. process.stdout.write()
3. console.table()
*/

// =====================================================
// 1. console.log()
// =====================================================

// Definition:
// console.log() prints data to the console.
// It automatically moves the cursor to the next line.

console.log("Hello");
console.log("Welcome");

// Output:
// Hello
// Welcome

// Printing multiple values

let name = "Birju";
let age = 20;

console.log(name, age);

// Output:
// Birju 20

// =====================================================
// 2. process.stdout.write()
// =====================================================

// Definition:
// process.stdout.write() prints data to the console
// WITHOUT moving to the next line.
//
// Note:
// This method works only in Node.js.

process.stdout.write("Hello ");
process.stdout.write("World");

// Output:
// Hello World
// Without space

process.stdout.write("Hello");
process.stdout.write("World");

// Output:
// HelloWorld

// =====================================================
// 3. Printing a Blank Line
// =====================================================

// console.log() without any value prints a blank line.

console.log();

console.log("This appears after a blank line.");

// =====================================================
// 4. console.table()
// =====================================================

// Definition:
// console.table() displays objects and arrays
// in a table format.

let person = {
  name: "Birju",
  city: "Chennai",
  age: 20,
};

console.table(person);

// Output:
//
// ┌─────────┬───────────┐
// │ (index) │ Values    │
// ├─────────┼───────────┤
// │ name    │ Birju     │
// │ city    │ Chennai   │
// │ age     │ 20        │
// └─────────┴───────────┘

// =====================================================
// console.table() with an Array
// =====================================================

let fruits = ["Apple", "Banana", "Mango"];

console.table(fruits);

// Output:
//
// ┌─────────┬──────────┐
// │ (index) │ Values   │
// ├─────────┼──────────┤
// │ 0       │ Apple    │
// │ 1       │ Banana   │
// │ 2       │ Mango    │
// └─────────┴──────────┘

// =====================================================
// Quick Revision
// =====================================================

// console.log()
// ✔ Prints data
// ✔ Automatically moves to the next line

// process.stdout.write()
// ✔ Prints data
// ✔ Does NOT move to the next line
// ✔ Works only in Node.js

// console.table()
// ✔ Displays objects and arrays as a table
// ✔ Makes data easier to read

// =====================================================
// Complete Example
// =====================================================

console.log("Hello JavaScript");

process.stdout.write("Node ");
process.stdout.write("JS");

console.log(); // Blank line

console.table({
  Name: "Birju",
  City: "Chennai",
  Course: "JavaScript",
});

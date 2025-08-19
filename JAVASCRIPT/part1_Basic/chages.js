/*
===============================================
   let vs const in JavaScript
===============================================
- let   → allows re-assignment
- const → constant (cannot be re-assigned)
*/

// ✅ Using let (re-assignment allowed)
let gameName = "spiderMan";
gameName = "batman"; // allowed
console.log("Game Name:", gameName); // Output: batman

// // ❌ Using const (re-assignment NOT allowed)
// const username = "birju679";
// username = "birju108"; // ❌ TypeError: Assignment to constant variable
// console.log("Username:", username);

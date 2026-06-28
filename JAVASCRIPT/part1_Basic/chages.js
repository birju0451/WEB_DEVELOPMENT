/*
========================================
   let vs const in JavaScript
========================================

let   → Value can be changed later.
const → Value cannot be changed later.

*/

// ======================
// Example 1: let
// ======================

let gameName = "Spider-Man";

console.log("Before:", gameName);

gameName = "Batman"; // ✅ Re-assignment allowed

console.log("After :", gameName);

// ======================
// Example 2: const
// ======================

const username = "birju679";

console.log("Username:", username);

// ❌ This is NOT allowed
// username = "birju108";

// If you remove the // above, JavaScript will throw:
// TypeError: Assignment to constant variable.
/*
========================================
   let vs const in JavaScript
========================================

let   → Value can be changed later.
const → Value cannot be changed later.

*/

// ======================
// Example 1: let
// ======================

let gameName = "Spider-Man";

console.log("Before:", gameName);

gameName = "Batman"; // ✅ Re-assignment allowed

console.log("After :", gameName);


// ======================
// Example 2: const
// ======================

const username = "birju679";

console.log("Username:", username);

// ❌ This is NOT allowed
// username = "birju108";

// If you remove the // above, JavaScript will throw:
// TypeError: Assignment to constant variable.
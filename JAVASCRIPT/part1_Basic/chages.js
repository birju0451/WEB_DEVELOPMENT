/*
========================================
let vs const in JavaScript
========================================

let   -> Allows reassignment.
const -> Does not allow reassignment.
*/

// Example 1: let
let gameName = "Spider-Man";

console.log("Before:", gameName);

gameName = "Batman";

console.log("After:", gameName);

// Example 2: const
const username = "birju679";

console.log("Username:", username);

// username = "birju108"; // Error: Assignment to constant variable.

/*
========================================
              REVISION NOTES
========================================

1. let:
   - Used to declare a variable.
   - Its value can be reassigned.
   - Example: gameName = "Batman";

2. const:
   - Used to declare a variable whose binding
     cannot be reassigned.
   - Must be initialized during declaration.
   - Reassignment causes a TypeError.

3. Scope:
   - Both let and const are block-scoped.
   - They are accessible only within the block
     in which they are declared.

4. Redeclaration:
   - let cannot be redeclared in the same scope.
   - const cannot be redeclared in the same scope.

5. Objects and Arrays:
   - const prevents reassignment of the variable.
   - Object properties and array elements can
     still be modified.

6. Best Practice:
   - Prefer const by default.
   - Use let when reassignment is necessary.
   - Avoid var in modern JavaScript when possible.

========================================
*/

// =======================================
// Constructor Functions in JavaScript
// =======================================

// A constructor function is a regular function used to create objects.
// By convention, constructor names start with a capital letter.
// The `new` keyword creates a new object and binds `this` to it.

// =======================================
// 1. Basic Constructor Function
// =======================================

function Person(name, age) {
  // `this` refers to the newly created object
  this.name = name;
  this.age = age;
}

let me = new Person("Birju", 18);

console.log(me);
// Output:
// Person { name: 'Birju', age: 18 }

// =======================================
// 2. Another Constructor Example
// =======================================

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar);
// Car { make: 'Toyota', model: 'Camry' }

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);
// Car { make: 'Tata', model: 'Safari' }

console.log(myNewCar.make);
// Output:
// Tata

// =======================================
// 3. Constructor with Methods
// =======================================

function Tea(type) {
  this.type = type;

  // ❌ Every object gets its own copy of this function
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("Lemon Tea");

console.log(lemonTea.describe());
// Output:
// This is a cup of Lemon Tea

/*
Memory Usage

Tea Object
│
├── type = "Lemon Tea"
└── describe()   ← New copy

Another Tea Object
│
├── type = "Green Tea"
└── describe()   ← Another copy

Every object stores its own function.
This wastes memory when many objects are created.
*/


// =======================================
// 4. Using Prototype (Recommended)
// =======================================

function Animal(species) {
  this.species = species;
}

// Shared by ALL Animal objects
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
let cat = new Animal("Cat");

console.log(dog.sound());
// Dog makes a sound

console.log(cat.sound());
// Cat makes a sound

/*
Memory Usage

Animal.prototype
│
└── sound()   ← Only ONE copy

dog --------┐
cat --------┤──► Uses same function
lion -------┘

Prototype methods are shared,
making them memory efficient.
*/

// =======================================
// 5. Enforcing the use of `new`
// =======================================

function Drink(name) {
  // If function isn't called using `new`,
  // new.target will be undefined.

  if (!new.target) {
    throw new Error("Drink must be called with the new keyword.");
  }

  this.name = name;
}

let tea = new Drink("Tea");
console.log(tea);
// Drink { name: 'Tea' }

// ❌ Incorrect
// let coffee = Drink("Coffee");
// Error:
// Drink must be called with the new keyword.

// =======================================
// What happens when `new` is used?
// =======================================

/*
new Person("Birju", 18)

Step 1:
Creates a new empty object

{}

↓

Step 2:
Sets the object's prototype

{} ---> Person.prototype

↓

Step 3:
`this` points to the new object

this.name = "Birju"
this.age = 18

↓

Step 4:
Returns the object automatically

Person {
    name: "Birju",
    age: 18
}
*/

// =======================================
// Constructor Function vs Prototype Method
// =======================================

/*

Method Inside Constructor

function User(name) {
    this.name = name;

    this.sayHi = function() {
        console.log("Hi");
    };
}

✔ Easy to understand
❌ Every object gets its own copy
❌ Uses more memory


Prototype Method

function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    console.log("Hi");
};

✔ Only one copy of the function
✔ Better performance
✔ Memory efficient
✔ Recommended for methods

*/

// =======================================
// Quick Interview Notes
// =======================================

/*

Constructor Function
--------------------
✔ Used to create multiple similar objects.
✔ Convention: Constructor names start with a capital letter.
✔ Must be called using `new`.

`this`
------
Inside a constructor, `this` refers to the newly created object.

`new`
-----
1. Creates an empty object.
2. Links it to the constructor's prototype.
3. Binds `this` to the new object.
4. Returns the object automatically.

Prototype
---------
✔ Stores shared methods.
✔ Only one copy exists.
✔ Saves memory.

new.target
----------
✔ Checks whether a function was called using `new`.
✔ Helps prevent accidental misuse.

*/

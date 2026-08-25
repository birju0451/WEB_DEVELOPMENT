/***********************************************************************
 * JAVASCRIPT OBJECTS, CONSTRUCTORS, PROTOTYPES & CLASSES
 * ---------------------------------------------------------------------
 * Topics Covered:
 * 1. Object Literal
 * 2. Constructor Function
 * 3. Prototype
 * 4. Custom Prototype Method
 * 5. ES6 Classes
 * 6. Inheritance
 ***********************************************************************/

console.log("==================================================");
console.log("1. OBJECT LITERAL");
console.log("==================================================");

/*
Object Literal
--------------
The easiest way to create a single object.
*/

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  // Method
  start: function () {
    // 'this' refers to the object that calls the method
    return `${this.make} ${this.model} started in ${this.year}`;
  },
};

console.log(car);
console.log(car.start());

/*
Memory

car
│
├── make  -> Toyota
├── model -> Camry
├── year  -> 2020
└── start() -> function
*/

console.log("\n==================================================");
console.log("2. CONSTRUCTOR FUNCTION");
console.log("==================================================");

/*
Constructor Function
--------------------
Used to create multiple similar objects.

Syntax:
new Constructor()
*/

function Person(name, age) {
  // 'this' refers to the newly created object
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
let alice = new Person("Alice", 25);

console.log(john);
console.log(alice);

console.log(john.name);
console.log(alice.age);

/*
What happens internally?

let john = new Person("John",20);

Step 1:
Creates an empty object

{}

Step 2:
Links object to Person.prototype

Step 3:
this = {}

this.name = "John"
this.age = 20

Step 4:
Returns object automatically

john

{
    name:"John",
    age:20
}
*/

console.log("\n==================================================");
console.log("3. PROTOTYPE");
console.log("==================================================");

/*
Instead of creating a copy of the method
for every object, keep only one copy
inside the prototype.
*/

function Animal(type) {
  this.type = type;
}

// Shared method
Animal.prototype.sound = function () {
  return `${this.type} makes a sound`;
};

let dog = new Animal("Dog");
let cat = new Animal("Cat");
let cow = new Animal("Cow");

console.log(dog.sound());
console.log(cat.sound());
console.log(cow.sound());

console.log(dog.sound); // Function reference

/*
Memory

dog
│
└── type -> Dog

↓

Animal.prototype

↓

sound()

The sound() function exists ONLY ONCE.
Every Animal object shares it.
*/

console.log("\n==================================================");
console.log("4. CUSTOM PROTOTYPE METHOD");
console.log("==================================================");

/*
Every array inherits from Array.prototype.

We can add our own method.
*/

Array.prototype.hitesh = function () {
  return `Custom Method : ${this}`;
};

let numbers = [1, 2, 3, 4];
let fruits = ["Apple", "Banana", "Orange"];

console.log(numbers.hitesh());
console.log(fruits.hitesh());

/*
How JavaScript finds hitesh()

numbers.hitesh()

↓

Search inside numbers

Not Found

↓

Search inside Array.prototype

Found

↓

Execute

this = numbers
*/

console.log("\n==================================================");
console.log("5. ES6 CLASS");
console.log("==================================================");

/*
Class is modern syntax.

Internally JavaScript still uses
Constructor Function + Prototype.
*/

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is made by ${this.make}`;
  }
}

let vehicle = new Vehicle("Toyota", "Corolla");

console.log(vehicle.start());

/*
Internally this is similar to

function Vehicle(make, model){
    this.make = make;
    this.model = model;
}

Vehicle.prototype.start = function(){
    ...
}
*/

console.log("\n==================================================");
console.log("6. INHERITANCE");
console.log("==================================================");

/*
extends

Allows one class to inherit another class.
*/

class Car extends Vehicle {
  constructor(make, model) {
    // Calls parent constructor
    super(make, model);
  }

  drive() {
    return `${this.model} is driving...`;
  }
}

let myCar = new Car("Toyota", "Fortuner");

console.log(myCar.start());
console.log(myCar.drive());

/*
Prototype Chain

myCar

↓

Car.prototype

↓

Vehicle.prototype

↓

Object.prototype

↓

null
*/

console.log("\n==================================================");
console.log("7. IMPORTANT DIFFERENCE");
console.log("==================================================");

console.log("Object Literal:");
console.log("- Used for creating one object.");

console.log("\nConstructor Function:");
console.log("- Used for creating many similar objects.");

console.log("\nPrototype:");
console.log("- Stores shared methods.");
console.log("- Saves memory.");

console.log("\nClass:");
console.log("- Modern syntax.");
console.log("- Internally uses Constructor + Prototype.");

console.log("\nInheritance:");
console.log("- Child class gets Parent properties and methods.");

console.log("\n==================================================");
console.log("8. SUMMARY");
console.log("==================================================");

/*

Object Literal
--------------
let obj = {}

Constructor Function
--------------------
function Person(){}

new Person()

Prototype
---------
Person.prototype.greet = function(){}

Class
-----
class Person{}

Inheritance
-----------
class Student extends Person{}

super()
-------
Calls parent constructor.

this
----
Refers to the current object.

Prototype Chain
---------------
Object
   ↑
Vehicle
   ↑
Car
   ↑
myCar

Array
  ↑
Array.prototype
  ↑
numbers

Person
  ↑
Person.prototype
  ↑
john

*/

console.log("\nProgram Completed Successfully.");

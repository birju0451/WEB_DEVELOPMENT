let car = {
  make: "Toyota",
  model: "Camery",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start());
//------------------------------------------------------------------->
function Person(name, age) {
  // 'this' points to the new object when called with 'new'
  this.name = name;
  this.age = age;
}
let john = new Person("John doe", 20);
console.log(john.name);

//--------------------------------------------------------------------->

// Constructor function for Animal
function Animal(type) {
  // Each object will have its own "type" property
  this.type = type;
}

// Adding method to prototype (shared by all Animal objects)
Animal.prototype.sound = function () {
  return `${this.type} makes a sound`;
};

// Create objects
let dog = new Animal("Dog");
let cat = new Animal("Cat");

// Call the sound() method
console.log(dog.sound()); // Output: Dog makes a sound
console.log(cat.sound()); // Output: Cat makes a sound

// If you log the method without calling it, you will see the function definition
console.log(dog.sound);
// Output: [Function: sound]  (in Node.js)
// or function body printed (in browser)

//-------------------------------------------------------------------------------------->
Array.prototype.hitesh = function(){
    return `Customer method ${this}`;
};
let myArray1 = [1,2,3,4];
console.log(myArray1.hitesh());

// 🟢 Step 1: Add a custom method to Array's prototype
// Every array in JavaScript inherits from Array.prototype
// So if we add a method here, ALL arrays can use it
Array.prototype.hitesh = function () {
  // 'this' refers to the array on which the method is called
  // When we use template string `${this}`, JavaScript internally calls this.toString()
  // For arrays, toString() joins elements with commas
  return `Customer method ${this}`;
};

// 🟢 Step 2: Create an array
let myArray = [1, 2, 3, 4];

// 🟢 Step 3: Call the custom method
console.log(myArray.hitesh());
// Output: "Customer method 1,2,3,4"

// Explanation of what happens here:
// 1. JavaScript looks for 'hitesh' in 'myArray'.
// 2. It doesn’t find it directly, so it looks at myArray’s prototype (Array.prototype).
// 3. Finds the 'hitesh' method there.
// 4. Executes 'hitesh' with 'this = myArray' → "1,2,3,4" when converted to string.

// 🟢 Step 4: Try with another array
let anotherArray = ["apple", "banana"];
console.log(anotherArray.hitesh());
// Output: "Customer method apple,banana"

// This works because all arrays share Array.prototype
// and we added 'hitesh' to it.
//----------------------------------------------------------------->

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // method should be inside the class
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    } 
}



// usage
// Base class
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// Child class extending Vehicle
class Car extends Vehicle {
  constructor(make, model) {
    super(make, model); // call parent constructor
  }

  drive() {
    return `${this.model} is driving...`;
  }
}

// Usage
let car1 = new Vehicle("Toyota", "Corolla");
console.log(car1.start()); 
// Corolla is a car from Toyota

let myCar = new Car("Toyota", "Corol");
console.log(myCar.start()); 
// Corol is a car from Toyota
console.log(myCar.drive()); 
// Corol is driving...

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.start());
// Corolla is a car from Toyota



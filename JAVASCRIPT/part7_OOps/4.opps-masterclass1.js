//Object Literal Example
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start()); // Toyota car got started in 2020

//Constructor Function Example
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John Doe", 20);
console.log(john.name); // John Doe

//Prototype Example
function Animal(type) {
  this.type = type;
}
Animal.prototype.sound = function () {
  return `${this.type} makes a sound`;
};
let dog = new Animal("Dog");
let cat = new Animal("Cat");
console.log(dog.sound()); // Dog makes a sound
console.log(cat.sound()); // Cat makes a sound

//Extending Array Prototype
Array.prototype.hitesh = function () {
  return `Custom method: ${this}`;
};
let numbers = [1, 2, 3, 4];
console.log(numbers.hitesh()); // Custom method: 1,2,3,4

// ES6 Classes with Inheritance
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

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

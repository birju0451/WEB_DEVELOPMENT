// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let me = new Person("Birju", 18);
console.log(me); // Person { name: 'Birju', age: 18 }

//Constructor function for Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar); // Car { make: 'Toyota', model: 'Camry' }

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar); // Car { make: 'Tata', model: 'Safari' }
console.log(myNewCar.make); // Tata

// Constructor with method inside (each object gets its own copy)
function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe()); // This is a cup of lemon tea

//Constructor + Prototype method (shared across all instances)
function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound()); // Dog makes a sound

let cat = new Animal("Cat");
console.log(cat.sound()); // Cat makes a sound

//Using new.target to enforce 'new'
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with 'new' keyword");
  }
  this.name = name;
}

let tea = new Drink("Tea");
console.log(tea); // Drink { name: 'Tea' }

// ❌ This will throw an error
// let coffee = Drink("Coffee");

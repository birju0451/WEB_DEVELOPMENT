// Constructor function for Person
function Person(name, age) {
  // 'this' points to the new object when called with 'new'
  this.name = name;
  this.age = age;
}
let me = new Person("birju",18);
console.log(me)

// Constructor function for Car
function Car(make, model) {
  this.make = make; // property 'make'
  this.model = model; // property 'model'
}

// Creating objects with 'new'
let myCar = new Car("Toyoto", "Camry");
console.log(myCar); // Output: Car { make: 'Toyoto', model: 'Camry' }

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar); // Output: Car { make: 'Tata', model: 'Safari' }
console.log(myNewCar.make); // Accessing property → "Tata"

// Constructor function with method inside
function Tea(type) {
  this.type = type;
  // Each new object gets its own copy of 'describe'
  this.describe = function () { // adds method to the object
    return `this is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());
// Output: "this is a cup of lemon tea"

// Constructor function + Prototype method
function Animal(species) {
  this.species = species;
}

// Adding method to prototype → shared by all Animal objects
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound()); // Output: "Dog makes a sound"

let cat = new Animal("Cat");
console.log(cat.sound()); // Output: "Cat makes a sound"

// ✅ Using new.target to enforce 'new'
function Drink(name) {
  // new.target is only defined if function is called with 'new'
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let tea = new Drink("tea");
console.log(tea);
// Output: Drink { name: 'tea' }

let coffee = Drink("coffee"); //Error → must be called with 'new'
console.log(coffee);

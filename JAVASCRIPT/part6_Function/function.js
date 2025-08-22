// 🌿 JavaScript Functions & Closures Examples

// ------------------------------------------------
// 1. Simple Function
function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Birju");
// Output: Hello Birju

// ------------------------------------------------
// 2. Function Returning a Value
function makeTea(typeTea) {
  return `Making ${typeTea}`;
}
let teaOrder = makeTea("Lemon Tea");
console.log(teaOrder);
// Output: Making Lemon Tea

// ------------------------------------------------
// 3. Function Inside Function
function orderTea(teaTypes) {
  function confirmOrder() {
    return `Order Confirmed for tea`;
  }
  return confirmOrder();
}
console.log(orderTea("Masala Chai"));
// Output: Order Confirmed for tea

// ------------------------------------------------
// 4. Arrow Function
const calculate = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculate(499, 100);
console.log(totalCost);
// Output: 49900

// ------------------------------------------------
// 5. Passing Function as Argument (Callback)
function makeTeaAgain(typeOfTea) {
  return `${typeOfTea} is ready`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("Earl Grey");
}
let order = processTeaOrder(makeTeaAgain);
console.log(order);
// Output: Earl Grey is ready

// ------------------------------------------------
// 6A. Normal Function Call
function anotherFunction(teaName) {
  return `Making: ${teaName}`;
}
function createTeaMaker1(teaType) {
  return anotherFunction(teaType);
}
let teaMaker1 = createTeaMaker1("Green Tea");
console.log(teaMaker1);
// Output: Making: Green Tea

// ------------------------------------------------
// 6B. Closure Example
function createTeaMaker2(name) {
  let score = 100; // private variable

  return function (teaType) {
    return `Making ${teaType}, Name: ${name}, Score: ${score}`;
  };
}
let teaMaker2 = createTeaMaker2("Hitesh");
console.log(teaMaker2("Green Tea")); // Making Green Tea, Name: Hitesh, Score: 100
console.log(teaMaker2("Black Tea")); // Making Black Tea, Name: Hitesh, Score: 100

// ------------------------------------------------
// 7. Closure Counter Example
function outerFunction() {
  let count = 0; // private variable
  return function () {
    count++;
    return count;
  };
}
let counter = outerFunction();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

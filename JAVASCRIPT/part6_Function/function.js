//1.
function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Birju");

//2.
function makeTea(typeTea){
    return `making ${typeTea}`;
}
let teaOrder= makeTea("Lemon Tea");
console.log(teaOrder);

//3.
function orderTea(teaTypes){
    function confirmOrder(){
        return `Order Confirm for trea`;
    }
    return confirmOrder();
}
console.log(orderTea("Masala Chai"));

//arrow function
const calculate = (price,quantitiy)=>{
  return price*quantitiy;
}

let totalCost =calculate(499,100);
console.log(totalCost)

//5
function makeTea(typeOfTea){
    return `${typeOfTea} is ready`
}
function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}
let order = processTeaOrder(makeTea);
console.log(order)

//6
    // function anotherfunction(teaName){
    //     return `Making : ${teaName}`;
    // }

    // function createTeaMaker(teaType){
    //     return anotherfunction(teaType);
    // }

    // let teakMaker = createTeaMaker("gree tea")
    // console.log(teakMaker);

    //---->or

    function createTeaMaker(name) {
        let score = 100;
      return function (teaType) {
        return `Making ${teaType} ,name : ${name} ,Score : ${score}`;
      };
    }

    let teaMaker = createTeaMaker("hitesh");
    let result = teaMaker("green tea");
    console.log(result);
      


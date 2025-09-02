//Encapsulation

class BankAccount{
    #balance = 0;

    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalanced(){
        return `$ ${this.#balance}`;
    }
}
let account = new BankAccount();
console.log(account.getBalanced());

//Abstraction
class CoffeeMachine{
    start(){
        //call DB
        //filter value
        return `Starting the Machine...`
    }
    brewCoffee(){
        //complex calculation
        return `Brewing Coffee`;
    }
    pressStartButton(){
        let msOne = this.start();
        let msTwo = this.brewCoffee();
        return `${msOne} + $ ${msTwo}`
    }
}
 
let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

//--------------------------------->
//Polymorphism
class Bird{
    fly(){
        return `Flying....`;
    }
}

class Peguin extends Bird{
    fly(){
        return `panguin can't fly`;
    }
}
let bird = new Bird();
let peguin = new Peguin();
// console.log(bird.fly());
// console.log(peguin.fly());

//----------------------------->
//static method

class Calculator{
    static add(a,b){
        return a+b;
    }
}

console.log(Calculator.add());

//------------------------------>
//Getter and Setter

class Employee{
    constructor(name,salary) {
        this.name = name
        this._salary = salary
    }
    get salary(){
        return `You are not allowed to see the salary`;
    }

    set salary(value){
        if(value < 0){
            console.log
        }
        else{
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", 50000);
console.log(emp.salary);
// ✅ Checking if a number is greater than another number
let num1 = 5;
let num2 = 8;

if (num1 > num2) {
  console.log("Num1 is greater than num2");
} else {
  console.log("Nope, num1 is NOT greater");
}

// ✅ Checking if a string is equal to another string
let username = "birju";
let anotherUsername = "birju";

if (username == anotherUsername) {
  // Used '===' for strict comparison
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

// ✅ Checking if the username is NOT equal
if (username != anotherUsername) {
  // Used '!==' for strict comparison
  console.log("Usernames are different. You can proceed.");
} else {
  console.log("Usernames are the same. Choose another.");
}


//cheaking if a variable is a number or not :

let score = 44;

if(typeof score === 'number'){
    console.log("yep , this is a number")
}else{
    console.log("Nop that is  not a number"); 
}

let score2 = [];

if (typeof score2 === "object") {
  console.log("yep , this is a object");
} else {
  console.log("Nop that is  not a object");
}

//Cheaking if a boolean value is true or false:
let isTeaReady = false

if(isTeaReady){
    console.log("Tea is Ready ");
}else{
    console.log("Tea is Not Ready");
    
}

//Check if an array is empty of not :
let item = ["iteam1"]

console.log(item.length);

if(item.length === 0){
    console.log("Array is empty"); 
}else{
    console.log("Array is not empty"); 
}

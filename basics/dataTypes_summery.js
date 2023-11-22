// JavaScript is dynamically typed language means we dont have to define the data type it automatically detects data type,
// Data-types are categorized on how data is stored in the memory and how it is accessed.

// Primitive : Call by value (Stack memory is used)
//             String, Number, Boolean, Null, Undefined, Symbol, BigInt

const name = "Vaibhav";
const userName = "Vaibhav";
// console.log(typeof name);

const age = 23;
// console.log(typeof age);

const present = false;
// console.log(typeof present);

const temp = null;
// console.log(typeof temp);    
// *null is object data type*

let undef;
// console.log(typeof undef);

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);
// two diffrent symbol with same value aren't same 

const bigNum = 98765n;
// console.log(typeof bigNum);

// Reference (Non primitive) -> call by reference
// Array, Objects, Functions -> Heap Memory is used

const students = ["Vaibhav", "Adil", "Nisha"]
// console.log(typeof students);
// *array is object type of datatype*

const myObj = {
    name : "Vaibhav",
    age : 23,
}
// console.log(typeof myObj);

const myFun = function() {
    console.log("Hello JavaScript!");
}
// console.log(typeof myFun);


// *****************************************
// Stack (Primitive), Heap (Non-Primitive)

let myName = "vaibhavsuthar";
let anotherName = myName;
anotherName = "sutharvaibhav";
// console.log(myName);
// console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ibl"
}
let userTwo = userOne;
userTwo.email = "vaibhav@google.com";
// console.log(userOne.email);
// console.log(userTwo.email);


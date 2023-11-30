// if   
const isUserLoggedIn = true
// const temp = 41

// if(temp === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, ===, !==

// const  balance = 1420

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<1000){
//     console.log("less than 1000");
// }
// else{
//     console.log("less than 1500");
// }

const UserLoggedIn = true
const debitCard = true
const loggedFromGoogle = false
const loggedFromEmail = true

if(UserLoggedIn && debitCard && 2==3){
    console.log("Allowed!");
}

if(loggedFromGoogle || loggedFromEmail){
    console.log("User logged in")
}
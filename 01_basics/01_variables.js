const acctId = 14423;    // cant update later
var acctName = "vaibhav";    // scope error not used now
let acctEmail = "vaibhav@google.com";  // more preferable for variables that can be updated
acctCity = "Jodhpur";
let acctState;

// acctId = 223 can't update later shows error 

acctName = "divyansh";
acctEmail = "v@v.com";
acctCity = "Jaipur";

// console.log(acctName); // prints Updated name in console 
/*
    dont use var because
    problem in block scope and functional scope
*/

console.table([acctId, acctName, acctEmail, acctCity, acctState]); // prints in tabular form

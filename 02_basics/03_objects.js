// Singleton
// Object.create

// object literals

const mySym = Symbol("123");

const JsUser = {
    name : "Vaibhav",
    "full name" : "Vaibhav Suthar",
    age : 23,
    [mySym] : "myKey1",
    location : "Jaipur",
    email : "vaibhav@google.com",
    isLoggedin : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "vaibhav@microsoft.com";
// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email = "vaibhav@chatgpt.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("greeting!");
}
JsUser.greetingTwo = function(){
    console.log("greetingTwo!");
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
console.log(JsUser);
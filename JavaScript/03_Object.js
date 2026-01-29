// singleton
// object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Himanshu",
    "full name": "Himanshu Dubey",
    [mySym]: "myKey1",
    age: 19,
    location: "lucknow",
    email: "himanshidubey@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "himanshidubey@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "himanshudubey@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
    




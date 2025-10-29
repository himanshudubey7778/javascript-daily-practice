// Primitive => call by value 
// 7 types : string, Number, Boolean, null, undefined, Symbol,  BigINT

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTump = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

// const BigNumber = 372882728737383n



// Non primitive (Call By refrence) 
// Array, object, functions

const heros = ["Shaktimaan" , "Spiderman" , "Bajrangi"]
let myObj = {
    name: "Himansu",
    age: 18,

}

const myFunction = function(){
    console.log("hello world!");
}


console.log(typeof scoreValue, score, isLoggedIn, outsideTump, );

console.log([1,2,3] instanceof Array);
console.log(1 + '2' - 1);
console.log(typeof NaN);
console.log(this);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack  (Primitive),   Heap (Non-Primitive)

let myYoutubename = "Himanshudubeydotcom"

let anothername = myYoutubename
anothername = "ChaiaurCode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "himanshu@google.com"

console.log(userOne.email);
console.log(userTwo.email);



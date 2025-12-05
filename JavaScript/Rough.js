// *************Immutable*********

let a = 10;
let b = a;
b = 20;

// console.log(a); // 10
// console.log(b); // 20

let name = "Himanshu";
name[0] = "R";  // ye change nahi karega
// console.log(name); // Output: "Himanshu"

//*********Mutable**********

let user = { name: "Himanshu" };
user.name = "Dubey";  // change ho gaya
// console.log(user.name); // "Dubey"

//********Primitive**********

let x = 10;
let y = a;
y = 20;

// console.log(x); // 10
// console.log(y); // 20

//*********Object**********
let person1 = { name: "Himanshu" };
let person2 = person1;

person2.name = "Dubey";

// console.log(person1.name); // "Dubey"

// console.log(1 > 2);
// console.log(1 < 2);
// console.log(1 >= 2);
// console.log(1 == 2);
// console.log(1 != 2);


// let score = 100;
// console.log(score);

// let score = 100;
// if (score > 50) {
//    console.log("You won");
   
// }

// let age = 15;

// if (age >= 18) {
//     console.log("You can vote");
    
// } else {
//     console.log("You can not vote");
    
// }

// let heros = ["spiderman", "shinchan", "doreomon"];
// heros[2] = "batman";
// console.log(heros);

// let order = ["Pizza", "Burger", "Water"];
// order.push("coke");
// console.log(order);

// let shopping = ["pant", "Shirt", "Lower"];
// shopping.push("T-shirt");
// shopping.pop("T-shirt");
// console.log(shopping);
// console.log(Array.isArray(shopping));

 //++++++unshift & Shift +++++++++

// let zudio = ["jaicket", "muflar", "huddie"];
// zudio.unshift("WinterWear");
// zudio.shift()
// console.log(zudio);

// ++++++++SLICE++++++++++
// let picture = ["KGF", "SALAR", "DEEWANIYAT", "SAYIARA", "RRR"];
// let myCut = picture.slice(1, 3);
// console.log(picture);
// console.log(myCut);

///+++Splice+++++
// let picture = ["KGF", "SALAR", "DEEWANIYAT", "SAYIARA", "RRR"];
// let myCut = picture.splice(1, 3);
// picture.splice(1,1, "Pushpa");
// console.log(picture);
// console.log(myCut);

// let number = 5;
// console.log(5 == "5");
// console.log(5 === "5");

// let age = 18;

// if(age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You are kid");
    
// }

//+++ (if-else) decision making 
// let score = 35;
// if(score >= 22) {
//     console.log("you are passed!");
// } else {
//     console.log("you are fail!");
    
// }

//+++Ternary Operator +++++++
let age = 17;
//One line of decision!
let status = (age >= 18) ? "Prince" : "Minor";

// console.log(status);

//+++Loose Equality( == ) ye sirf value check krta hai 
// console.log(5 == "5");

//++++Strict Equality( === ) Ye value + Datatype dono check krta hai (Always use this)
// console.log(5 === "5");

//++++Classic for loop+++
let actor = ["akshay", "Allu Arjun", "Salman Khan", "NTR"];
for(let i = 0; i < actor.length; i++) {
    console.log(actor[i]);c
}










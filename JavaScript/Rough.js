// *************Immutable*********

let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20

let name = "Himanshu";
name[0] = "R";  // ye change nahi karega
console.log(name); // Output: "Himanshu"

//*********Mutable**********

let user = { name: "Himanshu" };
user.name = "Dubey";  // change ho gaya
console.log(user.name); // "Dubey"

//********Primitive**********

let x = 10;
let y = a;
y = 20;

console.log(x); // 10
console.log(y); // 20

//*********Object**********
let person1 = { name: "Himanshu" };
let person2 = person1;

person2.name = "Dubey";

console.log(person1.name); // "Dubey"

console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 == 2);
console.log(1 != 2);


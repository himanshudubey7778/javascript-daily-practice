let score = true

console.log(typeof score);
console.log(typeof (score));

let ValueInNumber = Number(score)
console.log(typeof ValueInNumber);
console.log(ValueInNumber);

// 33 => 33
//"33abc" => NaN
//true => 1
//false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true , 0 => false
//"" => false
//"Himanshu" => true

let SomeNumber = 33

let stringNumber = String(SomeNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ********************

let value = 3
let negValue = -value
// console.log(negValue)

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);

let str1 = "Himanshu"
let str2 = " Divyansh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1 , num2 , num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
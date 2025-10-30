const name = "Himanshu"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo cout is ${repoCount}`)        //Modern Way string inter position


const gameName = new String('Himanshu-hd-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__)



//console.log(gameName.length);
//console.log(gameName.repeat(3));
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(-7, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "  Himanshu   "
console.log(newStringOne);
console.log(newStringOne.trim());  //trimStart , trimEnd


const url = "https://himanshu.com/himanshu%20dubey"

console.log(url.replace('%20', '-'))  //replace of work

console.log(url.includes('abhishek')) //returning true or false as appropriate

console.log(gameName.split('-'));  //The split() method of String values takes a pattern and divides

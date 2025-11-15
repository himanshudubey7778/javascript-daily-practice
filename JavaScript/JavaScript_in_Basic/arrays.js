// +++++ array ++++++++

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Hanuman", "father"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1]);

// ++++++++++ Array Methods +++++++++++++

//push → last to add

myArr.push(6)
myArr.push(7)

//pop → last to delete

myArr.pop()

//unshift() → start to add

myArr.unshift(2)

//shift() → start to delete 

myArr.shift()

//includes() → value is? (true/false)

console.log(myArr.includes(9));

//indexOf() → value of places is index? (number / -1)

console.log(myArr.indexOf(9));


// join() → array → string
const newArr = myArr.join()


console.log(myArr);


console.log(newArr);


//++++++++++++  slice, splice  +++++++++++

console.log("A ", myArr);


// start → included (comes inside the result)
// 👉 end → excluded (kept outside / not included in the result)
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


// 👉 start → the index from where deletion begins (included)
// 👉 deleteCount → how many elements to remove (not an end index)
const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);




let arr =[1,2,3,4,5];
let newarr = arr.slice(-1, -3);
let newarr2 = arr.slice();
// console.log(newarr);
// console.log(newarr2);

//slice is a Nonmutatable method in an array, it change the array itself

//splice is a mutatable method in an array, it change the array itself

console.log(arr);
//let removedArr = arr.splice(1, 2);
arr.splice(-2, 2);

console.log(arr);


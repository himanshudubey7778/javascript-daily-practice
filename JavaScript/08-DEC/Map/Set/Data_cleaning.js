console.log("_______Magic Trick: Rough Array is erase ________");

let roughArray = [1, 3, 1, 3, 2, 7, 3, 4];

let cleanSet = new Set(roughArray);

console.log("raugh Array:", roughArray);

console.log("clean Array:", cleanSet);

let FinalArray = [...cleanSet];

console.log("Final Unique Array:", FinalArray);



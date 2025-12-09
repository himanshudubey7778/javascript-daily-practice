let marks = [25, 56, 10, 80, 40, 30];

let updateMarks = marks.map(m => m +  6);
console.log("After of Bonus:", updateMarks);

let Passed = updateMarks.filter( m => m > 33 );

console.log("Passed Students :", Passed);


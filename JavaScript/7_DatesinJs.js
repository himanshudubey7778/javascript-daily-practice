// Date

let nowDate = new Date()
// console.log(nowDate.toString());
// console.log(nowDate.toDateString());
// console.log(nowDate.toLocaleString());
// console.log(typeof nowDate);

// let nowCreatedDate = new Date(2023, 0, 23)
// let nowCreatedDate = new Date(2023, 0, 23, 5, 9)
// let nowCreatedDate = new Date("2023-02-14")
let nowCreatedDate = new Date("01-14-2024")
// console.log(nowCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(nowCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getHours());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 2);

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: "now",
}) // important case in jS

console.log(newDate);






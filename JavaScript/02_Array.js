const my_practice = ["coding", "developer", "backend"]
const Hobby = ["frontend", "fullStack", "Clone"]

// my_practice.push(Hobby)

// console.log(my_practice);
// console.log(my_practice[3][1]);


//return new array not inside in array 
// const allWorks = my_practice.concat(Hobby)
// console.log(allWorks);

//spread operator in best and work 
const all_new_works = [...my_practice, ...Hobby]
// console.log(all_new_works);

const another_work = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]]

//flat tag work in spread out all array inside array
const real_another_work = another_work.flat(Infinity)
// console.log(real_another_work);

console.log(Array.isArray("Himanshu"));
//create a array in from tag
console.log(Array.from("Himanshu"));
console.log(Array.from({name: "himanshu"}));  //interesting Case


let salary1 = 10000
let salary2 = 140000
let salary3 = 190000

console.log(Array.of(salary1, salary2, salary3));






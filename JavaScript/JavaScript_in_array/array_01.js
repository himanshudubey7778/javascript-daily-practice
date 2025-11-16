//A JavaScript array accepts any data type because JavaScript is dynamic and doesn’t enforce type restrictions.

const favourite_heros = ["thor", "sanjaydutt", "NanaPaatkar"]
const normal_Heros = ["superman", "spiderman", "flash"]

// favourite_heros.push(normal_Heros)

console.log(favourite_heros);
console.log(favourite_heros [3] [1]);


//concat() is used to merge arrays without modifying the original ones.

// const all_heros = favourite_heros.concat(normal_Heros)
// console.log(all_heros);

const all_heros = [...favourite_heros, ...normal_Heros]
// console.log(all_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]]
const test_another_array = anotherArray.flat(Infinity)
console.log(test_another_array);

console.log(Array.isArray("Himanshu"));
console.log(Array.from("Himanshu")); 
console.log(Array.from({name: "Himanshu"}));  //important topic is interview question.....

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







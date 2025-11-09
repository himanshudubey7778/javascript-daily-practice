let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = ["a", "b"];
let arr4 = [6, "abcd", 7.4];
let arr5 = [true, () => {}];

// [1, 2, 3, 4, 5]

let nestedArr = [[1, 2], [3, 4], [5, 6]];
 
const rs = nestedArr.reduce((acc, curr) => {
    console.log(curr);
    console.log(acc);
    
    console.log([...acc, ...curr]);

    console.log("===============");
    return [...acc, ...curr];
}, [])
console.log(rs);


//let arr = mergedArr = arr1.concat(arr2, arr3, arr4, arr5);

//console.log(ans);
// console.log(arr2);
// let nestedArr = [[1, 2], [3, 4], [5, 6]];

// let rs = []

// nestedArr = forEach(e => {
//     rs = [...rs, ...e];
// })

// console.log(rs);
// console.log(nestedArr);






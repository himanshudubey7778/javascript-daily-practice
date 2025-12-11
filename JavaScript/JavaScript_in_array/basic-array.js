// One variable inside this all list

// let friends = ["Rahul", "Harsh", "Prince", "himanshu"];

// console.log(friends[0]);

function asyncTask() {
    return new Promise((rej)=> {
        rej();
    });
}
const x = asyncTask()
.then(()=> {
    console.log('First');
})
.catch()
.then(()=> {
    console.log('Second');
    
});
    

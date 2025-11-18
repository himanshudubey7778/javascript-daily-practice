function httpCall() {
    //promises are asyncronous in nature but customisable
    const p = new Promise((resolve, reject) => {
        console.log('Promise Started!');
        
        setTimeout(() => {
            
            resolve("Task Complete");
        }, 3000);
        console.log("Promise ended!");
        
    });

    return p;
}

console.log("Start!");

const p = httpCall();

p.then((msg) => {
    console.log("Promise is resolved successfully!");
}).catch(() => {
    console.log("Promise is rejected", msg);
})

console.log("End!");

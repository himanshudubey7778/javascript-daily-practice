//TASK 1
// console.log("start");

//some task which takes a good amount of time to complete 
//api/network call,database call, in-code data processing, interaction with some package

// function longTask() {
//     const start = Date.now();

//     while(Date.now() - start < 3000) {}

//     console.log("longTask is complete!");

// }

//TASK 2
// longTask();

// //TASK 3
// console.log("End");


function longTask(val, timeToWait) {
    const start = Date.now();

    while(Date.now() - start < timeToWait) {}

    console.log(val);

}

longTask("API Call", 1000);
longTask("Database interaction", 1500);
longTask("Thirdparty package interaction", 2000);
console.log("I finally return the response to the user!");

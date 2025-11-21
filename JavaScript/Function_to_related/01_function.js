function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    console.log(number1 + number2);
}

// const result = addTwoNumber(3, 5)

// console.log("Result", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("himanshu"));

//++++++++Function with object an array++++++++++++++

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));

const User = {
    username: "himanshu",
    price: 299
}
function handleObject(any){

}



    

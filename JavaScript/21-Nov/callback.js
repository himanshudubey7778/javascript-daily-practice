// setTimeout(() => {

//     }, 1000);

//     [1, 2, 3, 4].forEach((eachElem) => {

//     });




// setTimeout(() => {
//     console.log("I am the first callback!");

//     setTimeout(() => {
//         console.log("I am the second callback!");

//         setTimeout(() => {
//             console.log("I am the third callback!")
//         }, 3000)
//     }, 4000)
// }, 5000)



//val1 -> (val1 + 1) -> (val1 + 2) -> (val1 + 3) -> console.log()

// place order
    

//Place order
// new Promise((resolve, reject) => res(1))    //  fetches the users data 
// .then(val => val + 1)            //fetches the product data
// .then(val => val + 2)        //inventory data
// .then(val => val + 3)          //places the order & complete the payment
// .then(val => console.log(val))      //initiate order success email/whatsapp/triger
// .catch(e => console.log(e));        


function steps() {
    let x = 1;

    const p = new Promise((resolve, reject) => resolve(x + 1));

    p.then((val) => {
        return new Promise((resolve, reject) => resolve(val + 2));
    }).then((fval) => {
        console.log(fval);
    }).catch(error => {
        console.log(error);
    });
}


async function betterSteps() {
    let x = 1;

    x = await Promise.resolve(x + 1);
    x = await Promise.resolve(x + 2);

    console.log(x);
    
}

Promise.reject("not ok")
.then(msg => {
    console.log(msg);
})
.then(() => {
    console.log("second then function!");
    
})
.catch(error => console.log(error))
.finally(() => {
    console.log("Inside the finally block");
    
})
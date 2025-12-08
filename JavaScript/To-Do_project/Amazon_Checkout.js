let myCart = [
    {name: "Sumsung 24", price: 80000},
    {name: "Back Cover", price: 500},
    {name: "Termpered Glass", price: 300},
];

let totalPrice = 0;

console.log("___Item List___");

for(let i = 0; i < myCart.length; i++) {

    totalPrice = totalPrice + myCart[i].price;
    console.log(`${i+1}. ${myCart[i].name} : ${myCart[i].price}`);
    
}
let discountAmount = totalPrice * 0.15;

let deliveryCharge = 0;
let message = "";

if(totalPrice > 1000) {
    console.log("Congrats! Free delivery for you.");
    deliveryCharge = 0;
} else {
    console.log("Total 1000 se kam hai. Shipping Charge");
    deliveryCharge = 50;
}

let finalPayable = (totalPrice - discountAmount) + deliveryCharge;

console.log("__________________");
console.log("Total Price:  $" + totalPrice);
console.log("Discount (15%): -$" + discountAmount);
console.log("Delivery:  +&" + deliveryCharge + " (" + message + ")");
console.log("__________________");
console.log("FINAL To PAY:  $"  + finalPayable);




// let finalPayable = totalPrice - discountAmount;

// console.log("_________________");
// console.log("Subtotal (Total): $" + totalPrice);
// console.log("__________________");
// console.log("__________________");

// console.log("TO PAY AMOUNT:   $" + finalPayable);

    
    
    








let amazoncart = [
    {product: "iphone", price: 70000},
    {product: "Apple Watch", price: 30000},
    {product: "Charger", price: 2000},

];

let totalbill = 0;

for(let i = 0; i < amazoncart.length; i++) {
    totalbill = totalbill + amazoncart[i].price;
}

console.log("___Bill Receipt___");
console.log("Total Items: " + amazoncart.length);
console.log("Grand Total: " + totalbill);


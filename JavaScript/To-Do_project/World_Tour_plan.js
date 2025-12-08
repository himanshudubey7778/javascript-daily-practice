let myDreamTour = [
    {country: "USA (Silicon Valley)", cost: 500000},
    {country: "London (UK)", cost: 400000},
    {country: "Switzerland", cost: 600000},
    {country: "Japan (Tokyo)", cost: 800000},
];

let totalMoneyNeeded = 0;

console.log("_______My World Tour Plan_____");

for (let i = 0; i < myDreamTour.length; i++) {
    console.log(`${i+1}. ${myDreamTour[i].country} : ₹${myDreamTour[i].cost}`);

    totalMoneyNeeded = totalMoneyNeeded + myDreamTour[i].cost;
}

console.log("________________________________");
console.log("Total Target (Earning): ₹" + totalMoneyNeeded);
console.log("Hey brother Ready To Work!");
console.log("________________________________");



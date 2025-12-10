console.log("____________Learning SET (No Duplicates) ________");

let myVIPList = new Set();

myVIPList.add("Himanshu");
myVIPList.add("Rahul");
myVIPList.add("Himanshu");
myVIPList.add("Amit");

console.log(myVIPList);

console.log("What is Rahul?", myVIPList.has("Rahul"));
console.log("What is mr Yogi?", myVIPList.has("Modi"));

myVIPList.delete("Amit");
console.log("After deleting Amit:", myVIPList);





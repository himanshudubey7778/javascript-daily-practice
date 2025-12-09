let allCandidates = [
    {name: "Rahul", experience: 2},
    {name: "Himanshu", experience: 5},
    {name: "Harsh", experience: 1},
    {name: "Sakshi", experience: 4},
    {name: "Ayushi", experience: 0.6}
];

let selectedCandidates = [];

console.log("___ Hiring Process Started");

for(let i = 0; i < allCandidates.length; i++) {
    if (allCandidates[i].experience > 3) {
        selectedCandidates.push(allCandidates[i]);
        console.log(`Selected: ${allCandidates[i].name}`);
    } else {
        console.log(`Rejected: ${allCandidates[i].name} (Experience is low)`);
    }
}

//Final Result

// console.log("_________________________");
// console.log("Final Selected List:", selectedCandidates);
// console.log("_______________________");

//React/node Js (Try) 

console.log("__________ Modern Types (Filter method) _______");
let shortList = allCandidates.filter(Employee => Employee.experience > 3);

console.log(shortList);




        
        


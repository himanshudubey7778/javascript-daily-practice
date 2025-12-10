const input = document.getElementById("siteInput");
const btn = document.getElementById("saveBtn");
const display = document.getElementById("display");

//Load Data (List of)

function loadData() {
    //WareHouse of data store 
    let rawData = localStorage.getItem("mySiteList");

    //if Data is so Array create , so no empty list []
    let allSites = rawData ? JSON.parse(rawData) : [];

    // Screen clean od (Old sites remove)
    display.innerHTML = "";

    //Loop run all Sites see 
    if(allSites.length === 0) {
        display.innerText = "Now List is empty";
    } else {
        allSites.forEach(function(site) {
            display.innerHTML += site + "<br>";
        });
    }
}

// 2. Save button Logic 
btn.addEventListener("click", function() {
    let newSite = input.value;

    if(newSite === "") {
        alert("Empty not save!");
        return;
    }

    // Step A: Old Data Out (Array)
    let rawData = localStorage.getItem("mySiteList");
    let allSites = rawData ? JSON.parse(rawData) : [];


    // Step B: New Site List in Add (.push)
    allSites.push(newSite);

    //Step C: Return String Make Save do it
    localStorage.setItem("mySiteList", JSON.stringify(allSites));

    // Step D: Update Screen
    alert("Saved to List!");
    loadData();
});

//Start in add
loadData();
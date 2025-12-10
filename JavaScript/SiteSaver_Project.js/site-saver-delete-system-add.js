const input = document.getElementById("siteInput");
const btn = document.getElementById("saveBtn");
const display = document.getElementById("display");

//Btn new logic
btn.addEventListener("click", function(){
    let newSite = input.value;

    if (newSite === "") {
        alert("Empty File!");
        return;
    }

    //old list out side

    let rawData = localStorage.getItem("mySiteList");
    let allSites = rawData ? JSON.parse(rawData) : [];

    // New Site list in push do it
    allSites.push(newSite);

    // return save do (JSON Create)
    localStorage.setItem("mySiteList", JSON.stringify(allSites));
    // Update do it
    alert("Saved: " + newSite);
    input.value = "";  //Box clean it
    loadData();
});

function loadData() {
    //List Out
    let rawData = localStorage.getItem("mySiteList");
    let allSites = rawData ? JSON.parse(rawData) : [];

    //Screen clean do first
    display.innerHTML = "";

    if(allSites.length === 0) {
        display.innerHTML = "<h3>List Is Empty</h3>";
    } else {
        allSites.forEach(function(site, index) {

            //HTML add do this (Text + Delete Button)
            display.innerHTML += `
            <div style="display: flex; justify-content: space-between; margin: 10px; background: #333; padding: 10px;">
            
            <span>${site}</span>

            <button onclick="deleteSite(${index})" style="background: red; color: white;">Delete 🗑️</button>

            </div>
            `;  //this return Backtick close do it
        });
    }
}

//Part 3: Delete Logic
window.deleteSite = function(index) {
    //1. List Out
    let rawData = localStorage.getItem("mySiteList");
    let allSites = rawData ? JSON.parse(rawData) : [];

    //2 Splice meaning (cut Of Out)
    //(index, 1) -> this Number to 1 item fly do
    allSites.splice(index, 1);

    //3. the left of list return save do 
    localStorage.setItem("mySiteList", JSON.stringify(allSites));

    //Screen do it refresh
    loadData();
}

loadData();
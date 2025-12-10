const input = document.getElementById("siteInput");
const btn = document.getElementById("saveBtn");
const display = document.getElementById("display");

//Logic Start

//2 Why button click Activity

btn.addEventListener("click", function() {
    let instagram = input.value; 

    if(instagram === "") {
        alert("I am a developer!");
        return;
    }

    //MAIN Logic Data is memory saved by
    localStorage.setItem("myFavSite", instagram);

    alert("Saved: " + instagram);

    loadData();

});

// The data of return function (LOAD)
function loadData() {
    let savedData = localStorage.getItem("myFavSite");

    display.innerText = savedData ?? "now Time is no save";
}

loadData();
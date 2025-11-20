let button = document.getElementById("btn");

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML =
        "<b>Yeah you are clicked</b> Enjoy your click!";
});

button.addEventListener("contextmenu", ()=>{
    alert("Don't tap us by rightclick please ")
});

let myTasks = ["Brush Karna", "Break Fast"];

function addTask(kaam) {
    myTasks.push(kaam);
    console.log("New Task Added: " + kaam);
    
}

function showAllTasks() {
    console.log("--- Meri To-Do List ---");

    for(let i = 0; i < myTasks.length; i++) {
        console.log(i + 1 + ". " + myTasks[i]);
        
    }
    console.log("-----------------------");
    
}
showAllTasks();

    addTask("Project Banana");
    addTask("Englsih Practice");

    showAllTasks();
    

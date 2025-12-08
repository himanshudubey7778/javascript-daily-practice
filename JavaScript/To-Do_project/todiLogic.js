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
    
function deleteTask(index) {
    let removedItem = myTasks.splice(index, 1);
    console.log("Task Deleted: " + removedItem);
    
}


// deleteTask(0);
showAllTasks();

addTask("shopping karna hai");
addTask("market jana hai 3 pm me ");

showAllTasks();

function updateTask(index, newWork) {
    let oldWork = myTasks[index];
    myTasks[index] = newWork;
    
    console.log(`Updated: '${oldWork}' all complete ' ${newWork}'`);
    
}

updateTask(3, "Gym Is important");
updateTask(4, "passion Is important");

showAllTasks();

function findTask(keyword) {
    console.log(` Searching for: '${keyword}'...`);

    let whatHappen = false;

    for(let i = 0; i < myTasks.length; i++) {

        if (myTasks[i].includes(keyword)) {
            console.log(`All Complete! Index ${i} but: "${myTasks[i]}"`);
            whatHappen = true;
            
        }
    }

    if(whatHappen == false) {
        console.log("This task is no list added.");
        
    }
}

findTask("Gym");

showAllTasks();


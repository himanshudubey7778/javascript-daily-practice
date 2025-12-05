class Task {
    constructor(id, desc = "No Description", isCompleted = false){
        this.id = id;
        this.desc = desc;
        this.isCompleted = this.isCompleted;
    }
}

class TaskManager {
    
    constructor(){
        this.task = this.readFromLocalStorage();
    }
    cerateTask(description){
        const id = Date.now()
    }

    //add the task 

    createTask(description) {
        const id = "t_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
        const task = new Task(id, description);
        this.tasks.push(task);
        this.saveToLocalStorage();
    }
    //delete the task 

    deleteTask(id) {
        this.tasks = this.tasks.filter(eTask => eTask.id != id);
        this.saveToLocalStorage();
    }
    //updat the status of task

    toggleStatus(id) {
        const task = this.task.find(etask => eTask.id === id);
        if(task) {
            task.isCompleted = !task.isCompleted;
            this.saveToLocalStorage();
        }
    }
    //edit the task 

    editTask(id, newDesk) {
        const task = this.tasks.find(eTask => eTask.id === id);
        if(task && newDesc?.length > 3) {
            task.description = newDesc;
            this.saveToLocalStorage();
        }
    }
    //store to local storage 

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    //read from the local storage
    readFromLocalStorage() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }
    //filter tasks based on all || completed || pending

    filterTask(status) {
        if(status === "pending")
            return this.tasks.filter(eTask => eTask.isCompleted == false);
        if(status === "completed")
            return this.tasks.filter(etask => eTask.iscompleted === true);

        return this.tasks;
    }
}

//UiHandler

class UIHandler{
   constructor(TaskManager){
    this.TaskManager = TaskManager;
    this.taskInput =  document.getElementById("task-input");
    this.taskList = document.getElementById("task-list");
    this.filterButtons = document.querySelectorAll(".filter-btn");
    this.addBtn = document.getElementById("add-btn")
    this.filterOn = "all";
    this.init();
   }
   init(){
    this.addBtn.addEventListener('click',()=>this.addTask())
    this.taskInput.addEventListener("keyup",(e)=>{
        if(e.key==="enter"){
            
        }
    })
   }
}

const app = new UIHandler(new TaskManager())


// Fixed: 'allTasks' instead of 'allTracks'
let allTasks = [
    {
        id: 1,
        title: "Learn JavaScript Object",
        desc: "Understand how Keys and values work.",
        status: "todo"
    },
    {
        id: 2,
        title: "Setup HTML Structure",
        desc: "Create index.html with 3 columns.",
        status: "done"
    },
    {
        id: 3,
        title: "Style the Board",
        desc: "CSS Styling",
        status: "progress" // Fixed spelling
    }
];

console.log("Initial Data Loaded:", allTasks);

function renderTasks() {
    document.getElementById('todo-list').innerHTML = '';
    document.getElementById('progress-list').innerHTML = '';
    document.getElementById('done-list').innerHTML = '';

    allTasks.forEach(task => {
        // Fixed: Added quotes around id="${task.id}"
        let cardHTML = `
        <div class="task-card" draggable="true" id="${task.id}">
            <h3>${task.title}</h3>
            <p>${task.desc}</p>
        </div>
        `;

        if (task.status === 'todo') {
            document.getElementById('todo-list').innerHTML += cardHTML;
        } else if (task.status === 'progress') {
            document.getElementById('progress-list').innerHTML += cardHTML;
        } else if (task.status === 'done') {
            document.getElementById('done-list').innerHTML += cardHTML;
        }
    });
}

const modal = document.getElementById('task-modal');
const addBtn = document.getElementById('add-btn');
const titleInput = document.getElementById('task-title'); // Fixed space
const descInput = document.getElementById('task-desc');

// Fixed: 'addEventListener' spelling
addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

function closeModal() {
    modal.style.display = 'none';
    titleInput.value = '';
    descInput.value = '';
}

function saveTask() {
    const title = titleInput.value;
    const desc = descInput.value;

    if (title === '') {
        alert("Brother please write it!");
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        desc: desc,
        status: "todo"
    };

    allTasks.push(newTask);
    renderTasks();
    closeModal();
}

// Initial render call
renderTasks();

            
            

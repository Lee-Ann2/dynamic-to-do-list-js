const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert('Enter task.')
  } else {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = taskText;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = function() {
        taskList.removeChild(taskListItem);
        };
        taskListItem.appendChild(removeButton);
        taskList.appendChild(taskListItem);
        taskInput.value = "";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}
});

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});


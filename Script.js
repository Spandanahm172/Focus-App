// Get necessary elements from the DOM
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const task = taskInput.value;
  if (task) {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <span>${task}</span>
      <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// Function to remove a task
function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

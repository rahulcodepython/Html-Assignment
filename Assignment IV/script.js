document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const clearAllButton = document.getElementById('clearAllButton');
let taskCounter = 0;
addTaskButton.addEventListener('click', addTask);
clearAllButton.addEventListener('click', clearAllTasks);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', deleteTask);
    li.appendChild(deleteButton);
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });
    taskList.appendChild(li);
    updateTaskCount(1);
    saveTaskToLocalStorage(taskText);
    taskInput.value = '';
    styleTasks();
}
function updateTaskCount(num) {
    taskCounter += num;
    taskCount.textContent = `Total Tasks: ${taskCounter}`;
    if (taskCounter > 5) {
        taskList.style.width = '110%';
    } else {
        taskList.style.width = '100%';
    }
}
function deleteTask(event) {
    event.stopPropagation();
    const li = event.target.parentElement;
    li.remove();
    updateTaskCount(-1);
    removeTaskFromLocalStorage(li.textContent.replace('Delete', ''));
}
function clearAllTasks() {
    taskList.innerHTML = '';
    taskCounter = 0;
    updateTaskCount(0);
    localStorage.clear();
}
function saveTaskToLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function removeTaskFromLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}
function loadTasksFromLocalStorage() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', deleteTask);
        li.appendChild(deleteButton);
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });
        taskList.appendChild(li);
        taskCounter++;
    });
    updateTaskCount(0);
    styleTasks();
}
function styleTasks() {
    const tasks = taskList.getElementsByTagName('li');
    for (let i = 0; i < tasks.length; i++) {
        if (i % 2 === 0) {
            tasks[i].style.backgroundColor = '#f9f9f9';
        } else {
            tasks[i].style.backgroundColor = '#f4f4f4';
        }
    }
}

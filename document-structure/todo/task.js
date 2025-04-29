// поле ввода 
const taskInput = document.getElementById('task__input');
let tasks = [];
let removeButtons = [];

 // Тексты
function updateLocalStorage() {
    const tasksText = tasks.map(task => {
        return task.querySelector('.task__title').textContent;
    });
    
    // Сохраняем
    localStorage.setItem('taskList', JSON.stringify(tasksText));
}

// Проверяем и добавляем
function loadFromStorage() {
    if (localStorage.getItem('taskList')) {
        const savedTasks = JSON.parse(localStorage.getItem('taskList'));
        savedTasks.forEach(taskText => {
            if (taskText) {
                addTask(taskText);
            }
        });
    }
    
    // Обновляем ссылки 
    updateDomReferences();
}

// Добавляем в список
 
function addTask(taskText) {
    const tasksList = document.getElementById('tasks__list');
    const taskHtml = `
        <div class="task">
            <div class="task__title">${taskText}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `;
    
    // Вставляем в конец списка
    tasksList.insertAdjacentHTML('beforeend', taskHtml);
    updateDomReferences();
    setupRemoveHandlers();
}

function updateDomReferences() {
    tasks = Array.from(document.querySelectorAll('.task'));
    removeButtons = Array.from(document.querySelectorAll('.task__remove'));
}

//удаление
function setupRemoveHandlers() {
    removeButtons.forEach((button, index) => {
        button.onclick = null;
        button.onclick = function(e) {
            e.preventDefault();
            tasks[index].remove();
            updateDomReferences();
            updateLocalStorage();
        };
    });
}

function handleAddTask() {
    if (taskInput.value.trim()) {
        addTask(taskInput.value.trim());
        updateLocalStorage();
        taskInput.value = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadFromStorage();
    
    // Клики
    document.getElementById('tasks__add').addEventListener('click', function(e) {
        e.preventDefault();
        handleAddTask();
    });
    
    // Enter 
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    });
});
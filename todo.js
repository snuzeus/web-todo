const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');

let todos = [];
let todoId = 0;

function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.done ? 'done' : ''}`;
        
        li.dataset.id = todo.id;

        li.innerHTML = `
            <input type="checkbox" class="toggle-checkbox" ${todo.done ? 'checked' : ''}>
            <span class="todo-content">${todo.content}</span>
            <button class="delete-btn">삭제</button>
        `;

        todoList.appendChild(li);
    });

    todoCount.textContent = `전체 ${todos.length}개`;
}

function addTodo() {
    const content = todoInput.value.trim(); 

    if (content === '') {
        alert('할 일을 입력해주세요!');
        return;
    }

    const newTodo = {
        id: todoId++, 
        content: content,
        done: false
    };

    todos.push(newTodo); 
    
    todoInput.value = '';
    todoInput.focus(); 

    renderTodos(); 
}

addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});
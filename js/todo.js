const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todo";

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();    //remove from html
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleSubmitTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj={
        text:newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleSubmitTodo); 

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos!== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}


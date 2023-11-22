
const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const userInput = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userInput);
    paintGreetings(userInput);
}

function paintGreetings(userName){
    greeting.innerText = `hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    //form show
    loginForm.classList.remove(HIDDEN_CLASS);
    //보여준다음에 eventlistener을 추가하는게 명시적임!
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //greeting show 여기도 내용을 넣은다음에 보여주는게 일반적임
    paintGreetings(savedUsername);
}
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutForm = document.querySelector("#logout-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAVME_KEY = "username, ";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAVME_KEY, username);
  location.reload();
  paintGreetings(username);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  logoutForm.classList.add(HIDDEN_CLASSNAME);
  window.alert("See you later");
  localStorage.clear();
  location.reload();
}

function paintGreetings(username) {
  greeting.innerText = `안녕 ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutForm.addEventListener("submit", onLogoutSubmit);

const savedUsername = localStorage.getItem(USERNAVME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}

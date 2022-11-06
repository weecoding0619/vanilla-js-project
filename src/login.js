
const header = document.querySelector('header');
const main = document.querySelector('main');
const loginForm = document.querySelector('.login__form');
const bgImage = document.querySelector('#bg-image');
const loginInput = document.querySelector('.login__input');
const greeting = document.querySelector('.greeting');

const HIDDEN_CLASSNAME = 'hidden';
const BLUR_CLASSNAME = 'blur';
const USERNAME_KEY = 'username';


function onLoginSubmit(event) {
  event.preventDefault();
  header.classList.add(HIDDEN_CLASSNAME);
  main.classList.remove(HIDDEN_CLASSNAME);
  bgImage.classList.remove(BLUR_CLASSNAME);

  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  main.classList.remove(HIDDEN_CLASSNAME);
  header.classList.add(HIDDEN_CLASSNAME);
  bgImage.classList.remove(BLUR_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  header.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings()
}
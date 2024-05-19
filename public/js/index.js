import { login, signup } from './login.js';

document.addEventListener('DOMContentLoaded', function () {
  console.log('test');
  document
    .getElementById('login_button')
    .addEventListener('click', function () {
      window.setTimeout(() => {
        location.assign('/login_page');
      }, 1500);
    });
});
document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('signup_button')
    .addEventListener('click', function () {
      window.setTimeout(() => {
        location.assign('/signup_page');
      }, 1500);
    });
});
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn_cancel').addEventListener('click', function () {
    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  });
});
const loginForm = document.querySelector('.form--login');
if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    login(email, password);
  });
const signupForm = document.querySelector('.form--signup');
if (signupForm)
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('username').value;
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordconfirm').value;
    signup(userName, firstName, lastName, email, password, passwordConfirm);
  });

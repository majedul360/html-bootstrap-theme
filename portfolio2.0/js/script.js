


/************************ Login Form ***********************/

let login = document.querySelector("#login-btn");
let loginContainer = document.querySelector(".login-form-container");
let loginClose = document.querySelector("#login-close");



login.addEventListener('click', () => {

  loginContainer.style.display = "flex";

});


loginClose.addEventListener('click', () => {

  loginContainer.style.display = "none";

});

/************ menu bar ******************* */
let menuBar = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");



menuBar.addEventListener('click', () => {

  navBar.classList.toggle('active');

});
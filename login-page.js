
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginReset = document.getElementById("login-form-reset");
const loginSuccessMsg1 = document.getElementById("success-msg1");
const loginSuccessMsg2 = document.getElementById("success-msg2");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "user") {
        loginSuccessMsg1.style.opacity = 1;
    }
    else if (username === "admin" && password === "admin") {     
        loginSuccessMsg2.style.opacity = 1;
      /* location.reload();*/
     }
     else{
        alert("Invalid username and/or password"); 
        location.reload(); }
}) 
loginReset.resetEventListener("click", (e) => {
    e.preventDefault();
}) 
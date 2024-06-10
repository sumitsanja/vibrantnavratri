document.addEventListener("DOMContentLoaded", function () {
  let loginForm = document.querySelector(".form.login");
  let loginButton = loginForm.querySelector(".button input");
  let emailInput = loginForm.querySelector("input[type='text']");
  let passwordInput = loginForm.querySelector("input[type='password']");
  let errorMessage = loginForm.querySelector("#error-message");

  loginButton.addEventListener("click", function () {
      let email = emailInput.value.trim();
      let password = passwordInput.value.trim();

      // Simple email validation
      if (!email.includes("@")) {
          errorMessage.textContent = "The '@' symbol is missing in your email address.";
          return;
      } else {
          errorMessage.textContent = "";
      }

      // Check if password is entered
      if (password === "") {
          errorMessage.textContent = "Password cannot be empty.";
          return;
      } else {
          errorMessage.textContent = "";
      }

      // If both fields are valid, redirect to the homepage
      if (email !== "" && password !== "") {
          // Assuming 'index.html' is your homepage
          window.location.href = 'homepage.html';
      }
  });

  let container = document.querySelector(".container");
  let signUp = document.querySelector(".signup-link");
  let login = document.querySelector(".login-link");

  signUp.addEventListener("click", () => {
      container.classList.add("active");
  });

  login.addEventListener("click", () => {
      container.classList.remove("active");
  });
});





// document.getElementById("form1").addEventListener("Login", function () {

//   let emailinput = document.getElementById("email");
//   let errorMessage = document.getElementById("error-message");
//   let email = emailinput.value;

//   if (!email.includes("@")) {
//     errorMessage.textContent = "The '@' symbol is missing in your email address.";
//   }
//   else {
//     errorMessage.textContent = "";
//   }

//   alert("Form submitted successfully.");
// });

// let container = document.querySelector(".container");
//           //   pwShowHide=document.querySelectorAll("ShowHide");
//           //   pwFields = document.querySelectorAll(".password");
// signUp = document.querySelector(".signup-link");
// login = document.querySelector(".login-link");


// signUp.addEventListener("click", () => {
//   container.classList.add("active");
  
  
// });
// login.addEventListener("click", () => {
//   container.classList.remove("active");
 
// });


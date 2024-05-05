// const loginHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector("#email-login").value.trim();
//   const password = document.querySelector("#password-login").value.trim();

//   console.log("Email:", email); // Add this log to check if email value is retrieved correctly
//   console.log("Password:", password);

//   if (email && password) {
//     const response = await fetch("/api/user/login", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     console.log("Response:", response);

//     if (response.ok) {
//       console.log("Login successful");
//       document.location.replace("/dashboard");
//     } else {
//       console.log("Login failed");
//       alert("Failed to log in.");
//     }
//   }
// };

// var ele = document.getElementById("login-form");
// if (ele) {
//   if (ele.addEventListener) {
//     console.log("submit");
//     ele.addEventListener("submit", loginHandler, false); //Modern browsers
//   } else if (ele.attachEvent) {
//     console.log("loging");
//     ele.attachEvent("onsubmit", loginHandler); //Old IE
//   }
// }

// document.getElementById("login-form").addEventListener("submit", loginHandler);

const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log("Email:", email);
  console.log("Password:", password);

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("Response:", response);

    if (response.ok) {
      console.log("Login successful");
      document.location.replace("/dashboard");
    } else {
      console.log("Login failed");
      alert("Failed to log in.");
    }
  }
};

// Add event listener to the login form
document.getElementById("login-form").addEventListener("submit", loginHandler);

// Add event listener to the login button
document.getElementById("loginButton").addEventListener("click", loginHandler);

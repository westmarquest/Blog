const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log("Email:", email);
  console.log("Password:", password);

  if (email && password) {
    try {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response:", response);

      if (response.ok) {
        const data = await response.json();
        const token = data.token; // Assuming the server sends back a token in the response

        // Store the token in local storage
        localStorage.setItem("token", token);

        console.log("Login successful");
        window.location.href = "/home"; // Redirect to the dashboard upon successful login
      } else {
        console.log("Login failed");
        alert("Failed to log in.");
      }
    } catch (err) {
      console.error("An error occurred:", err);
      alert("An error occurred while attempting to log in.");
    }
  }
};

// Add event listener to the login form
document.getElementById("login-form").addEventListener("submit", loginHandler);

// Add event listener to the login button
document.getElementById("loginButton").addEventListener("click", loginHandler);

// Add event listener to the signup button
document.getElementById("signupButton").addEventListener("click", () => {
  document.location.href = "/signup"; // Redirect to the signup page when the signup button is clicked
});

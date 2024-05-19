// Function to handle sign-up form submission
const signupHandler = async (event) => {
  event.preventDefault();

  // Get user input from the sign-up form
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Check if all required fields are filled
  if (username && email && password) {
    try {
      // Send a POST request to the server to sign up the user
      const response = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      // Check if the sign-up request was successful
      if (response.ok) {
        // Redirect the user to the dashboard upon successful sign-up
        document.location.replace("/dashboard");
      } else {
        // Display an alert if sign-up fails
        alert("Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors that occur during sign-up request
      alert("An error occurred. Please try again later.");
    }
  } else {
    // Display an alert if any required field is empty
    alert("Please fill in all required fields.");
  }
};

// Add event listener to the sign-up form
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", signupHandler);
  }
});

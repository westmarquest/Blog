document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-post-button")
    .addEventListener("click", function () {
      const formContainer = document.getElementById("form-container");
      formContainer.innerHTML = `
        <form id="create-post-form">
          <input type="text" id="post-title" placeholder="Title" required />
          <textarea id="post-content" placeholder="Content" required></textarea>
          <button type="submit">Submit</button>
        </form>
      `;

      document
        .getElementById("create-post-form")
        .addEventListener("submit", async function (event) {
          event.preventDefault();

          const title = document.getElementById("post-title").value;
          const content = document.getElementById("post-content").value;

          const response = await fetch("/api/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),
          });

          if (response.ok) {
            location.reload();
          } else {
            alert("Failed to create post");
          }
        });
    });
});

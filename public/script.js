const likeButtons = document.getElementsByClassName("like-button");

[...likeButtons].forEach((button) => {
  button.addEventListener("click", async (e) => {
    const user = e.target.dataset.user;
    const response = await fetch("/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user }),
    });

    if (response.ok) {
      e.target.textContent++;
    }
  });
});

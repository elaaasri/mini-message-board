const likeButtons = document.getElementsByClassName("like");

[...likeButtons].forEach((button) => {
  button.addEventListener("click", async (e) => {
    const user = e.target.dataset.user;
    const heartIcon = e.target.previousElementSibling;

    const response = await fetch(`/likes/${user}`, {
      method: "POST",
    });

    if (response.ok) {
      e.target.textContent++;
      heartIcon.style.color = "red";
    }
  });
});

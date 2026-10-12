const likeButtons = document.querySelectorAll(".likes");

[...likeButtons].forEach((button) => {
  button.addEventListener("click", async (e) => {
    const id = e.target.dataset.id;
    const heartIcon = e.target.previousElementSibling;

    const response = await fetch(`/likes/${id}`, {
      method: "POST",
    });

    if (!response.ok) {
      const html = await response.text();
      document.documentElement.innerHTML = html;
    } else {
      e.target.textContent++;
      heartIcon.style.color = "red";
    }
  });
});

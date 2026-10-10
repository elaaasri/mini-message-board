const likeButtons = document.querySelectorAll(".likes");

[...likeButtons].forEach((button) => {
  button.addEventListener("click", async (e) => {
    const id = e.target.dataset.id;
    const heartIcon = e.target.previousElementSibling;
    console.log("zbe", id);

    const response = await fetch(`/likes/${id}`, {
      method: "POST",
    });

    if (response.ok) {
      e.target.textContent++;
      heartIcon.style.color = "red";
    }
  });
});

//modal script
let modal = document.getElementById(`hundOneModal`);
let button = document.getElementById(`hundOne`);
let span = document.getElementById(`close`);

button.addEventListener("click", () => {
  modal.style.display = "block";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = `none`;
  }
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

//modal script
let modal = document.getElementById(`questModal`);
let button = document.getElementById(`hundOne`);
let span = document.getElementById(`close`);

let guessButt = document.getElementById(`guess`);
let passButt = document.getElementById(`pass`);

//opens modal question box on click
button.addEventListener("click", () => {
  modal.style.display = "block";
});

// closes modal box on outside click
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = `none`;
  }
});

// guess button to open guess modal box
guessButt.addEventListener("click", () => {
  console.log(`guess`);
});

// pass button to pass question to other player
passButt.addEventListener("click", () => {
  console.log(`passed`);
});

let questButt = document.getElementsByClassName(`question`);
console.log(questButt);

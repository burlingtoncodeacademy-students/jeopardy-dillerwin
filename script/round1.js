//modal script
let modal = document.getElementById(`questModal`);
let modalContent = document.getElementById(`modalText`);
let span = document.getElementById(`close`);
let questions = document.getElementsByClassName(`question`);

let guessButt = document.getElementById(`guess`);
let passButt = document.getElementById(`pass`);

let button = document.querySelectorAll(`.question`);

//forEach loop that turns all question boxes into clickables
button.forEach((element) =>
  element.addEventListener("click", (event) => {
    modal.style.display = "block";
  })
);

// //opens modal question box on click
// cat1line1.addEventListener("click", () => {
//   modal.style.display = "block";
//   modalContent.textContent = `Category One $100 question`;
// });

// cat2line1.addEventListener("click", () => {
//   modal.style.display = "block";
//   modalContent.textContent = `Category Two $100 question`;
// });

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

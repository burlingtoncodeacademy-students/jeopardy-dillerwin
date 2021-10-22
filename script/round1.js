//modal script
let modal = document.getElementById(`questModal`);
let modalContent = document.getElementById(`modalText`);
let span = document.getElementById(`close`);
let questions = document.getElementsByClassName(`question`);

let guessButt = document.getElementById(`guess`);
let passButt = document.getElementById(`pass`);

// category variables

//category 1
let cat1line1 = document.getElementById(`hundOne`);
let cat1line2 = document.getElementById(`twoHundOne`);
let cat1line3 = document.getElementById(`threeHundOne`);
let cat1line4 = document.getElementById(`fourHundOne`);
let cat1line5 = document.getElementById(`fiveHundOne`);

//category 2
let cat2line1 = document.getElementById(`hundTwo`);
let cat2line2 = document.getElementById(`twoHundTwo`);
let cat2line3 = document.getElementById(`threeHundTwo`);
let cat2line4 = document.getElementById(`fourHundTwo`);
let cat2line5 = document.getElementById(`fiveHundTwo`);

//category 3
let cat3line1 = document.getElementById(`hundThree`);
let cat3line2 = document.getElementById(`twoHundThree`);
let cat3line3 = document.getElementById(`threeHundThree`);
let cat3line4 = document.getElementById(`fourHundThree`);
let cat3line5 = document.getElementById(`fiveHundThree`);

//category 4
let cat4line1 = document.getElementById(`hundFour`);
let cat4line2 = document.getElementById(`twoHundFour`);
let cat4line3 = document.getElementById(`threeHundFour`);
let cat4line4 = document.getElementById(`fourHundFour`);
let cat4line5 = document.getElementById(`fiveHundFour`);

//category 5
let cat5line1 = document.getElementById(`hundFive`);
let cat5line2 = document.getElementById(`twoHundFive`);
let cat5line3 = document.getElementById(`threeHundFive`);
let cat5line4 = document.getElementById(`fourHundFive`);
let cat5line5 = document.getElementById(`fiveHundFive`);

//category 6
let cat6line1 = document.getElementById(`hundSix`);
let cat6line2 = document.getElementById(`twoHundSix`);
let cat6line3 = document.getElementById(`threeHundSix`);
let cat6line4 = document.getElementById(`fourHundSix`);
let cat6line5 = document.getElementById(`fiveHundSix`);

let button = document.querySelectorAll(`.question`);

//forEach loop that turns all question boxes into clickables
button.forEach((element) =>
  element.addEventListener("click", (event) => {
    console.log(`clicked`);
  })
);



//opens modal question box on click
cat1line1.addEventListener("click", () => {
  modal.style.display = "block";
  modalContent.textContent = `Category One $100 question`;
});

cat2line1.addEventListener("click", () => {
  modal.style.display = "block";
  modalContent.textContent = `Category Two $100 question`;
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

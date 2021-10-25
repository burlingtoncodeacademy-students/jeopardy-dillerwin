//modal script
let questModal = document.getElementById(`questModal`);
let questModalText = document.getElementById(`questModalText`);
let span = document.getElementById(`close`);
let questions = document.getElementsByClassName(`question`);

let guessButt = document.getElementById(`guess`);
let guessModal = document.getElementById(`guessModal`);

let passButt = document.getElementById(`pass`);

let button = document.querySelectorAll(`.question`);

let indexSearch = {
  hundOne: 0,
  hundTwo: 1,
  hundThree: 2,
  hundFour: 3,
  hundFive: 4,
  hundSix: 5,

  twoHundOne: 0,
  twoHundTwo: 1,
  twoHundThree: 2,
  twoHundFour: 3,
  twoHundFive: 4,
  twoHundSix: 5,

  threeHundOne: 0,
  threeHundTwo: 1,
  threeHundThree: 2,
  threeHundFour: 3,
  threeHundFive: 4,
  threeHundSix: 5,

  fourHundOne: 0,
  fourHundTwo: 1,
  fourHundThree: 2,
  fourHundFour: 3,
  fourHundFive: 4,
  fourHundSix: 5,

  fiveHundOne: 0,
  fiveHundTwo: 1,
  fiveHundThree: 2,
  fiveHundFour: 3,
  fiveHundFive: 4,
  fiveHundSix: 5,

  djTwoHundOne: 0,
  djTwoHundTwo: 1,
  djTwoHundThree: 2,
  djTwoHundFour: 3,
  djTwoHundFive: 4,
  djTwoHundSix: 5,

  // hundTwo: 1,
  // hundThree: 2,
  // hundFour: 3,
  // hundFive: 4,
  // hundSix: 5,
};

//forEach loop that turns all question boxes into clickables
button.forEach((element) =>
  element.addEventListener("click", (event) => {
    // want to collect id of clicked item
    let questId = event.target.id;
    let round = undefined;
    let itemIndex = undefined;
    let itemClass = event.target.parentElement.className;
    event.target.style.pointerEvents = "none";
    event.target.textContent = "";
    console.log(itemClass);

    //then pass that info through json file
    fetch(`script/questions.json`)
      .then((res) => res.json())
      .then((data) => {
        if (document.URL.indexOf(`round1.html`) >= 0) {
          round = `round one`;
        }
        if (document.URL.indexOf(`doubleJeopardy.html`) >= 0) {
          round = `double jeopardy`;
        }

        itemIndex = indexSearch[questId];

        console.log(itemIndex);

        let question = data[round][itemClass][itemIndex][`answer`];

        questModalText.textContent = question;

        questModal.style.display = "block";
      });
  })
);

// closes modal box on outside click
window.addEventListener("click", (event) => {
  if (event.target === questModal) {
    questModal.style.display = `none`;
  }
});

// guess button to open guess modal box
guessButt.addEventListener("click", () => {
  guessModal.style.display = "block";
  console.log(`guess`);
});

// pass button to pass question to other player
passButt.addEventListener("click", () => {
  console.log(`passed`);
});

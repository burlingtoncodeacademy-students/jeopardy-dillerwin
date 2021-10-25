//modal script
let questModal = document.getElementById(`questModal`);
let questModalText = document.getElementById(`questModalText`);
let questions = document.getElementsByClassName(`question`);

// variables for guess button and guess modal box
let guessButt = document.getElementById(`guess`);
let guessModal = document.getElementById(`guessModal`);

//sets up pass button for event listener
let passButt = document.getElementById(`pass`);

//I'm not sure why this needs to be .question, but it breaks if it isn't
let button = document.querySelectorAll(`.question`);

//index table for items in json file
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
    // sets round variable
    let round = undefined;
    //sets itemIndex variable
    let itemIndex = undefined;
    //fetches itemClass
    let itemClass = event.target.parentElement.className;
    //disables box from being clicked again
    event.target.style.pointerEvents = "none";
    //removes text from clicked box
    event.target.textContent = "";

    //then pass that info through json file
    fetch(`script/questions.json`)
      .then((res) => res.json())
      .then((data) => {
        // checks if on round one or double jeopardy
        if (document.URL.indexOf(`round1.html`) >= 0) {
          round = `round one`;
        }
        if (document.URL.indexOf(`doubleJeopardy.html`) >= 0) {
          round = `double jeopardy`;
        }

        //collects question index from indexSearch
        itemIndex = indexSearch[questId];

        //pulls info for question out of json file
        let question = data[round][itemClass][itemIndex][`answer`];

        //changes modal box text to question
        questModalText.textContent = question;

        // throws up modal box
        questModal.style.display = "block";
      });
  })
);

//set count for page change
let count = 0;

// closes modal box on outside click
window.addEventListener("click", (event) => {
  if (event.target === questModal) {
    //count and if check will send page to double jeopardy if all round one questions have been answered
    count += 1;
    if (count >= 30) {
      console.log(`Leaving page`);
      // changes page to double jeopardy
      window.location.href = "doubleJeopardy.html";
    }
    console.log(count);
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
  //checks current player
  currentPlayer = document.getElementById(`questionAsker`);
  //swaps players based on who just passed
  if (currentPlayer.textContent.includes(`Player One's`)) {
    currentPlayer.textContent = `It's Player Two's Turn`;
  } else {
    currentPlayer.textContent = `It's Player One's Turn`;
  }
  console.log(currentPlayer.textContent);
});

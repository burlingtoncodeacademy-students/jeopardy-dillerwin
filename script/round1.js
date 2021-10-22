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
    // want to collect id of clicked item
    let questId = event.target.id;
    console.log(questId);
    //then pass that info through json file
    fetch(`script/questions.json`)
      .then((res) => res.json())
      .then((data) => {
        if (document.URL.indexOf(`round1.html`) >= 0) {
          console.log(data[questId[answer]]);
        }
        if (document.URL.indexOf(`doubleJeopardy.html`) >= 0) {
          console.log(data[`double jeopardy`]);
        }

        modal.style.display = "block";
      });
  })
);

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

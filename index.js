// Globals
let wordToType = "";
let indexCharacter = 0;
let indexWordSelect = 0;
let time = 30;
let intervalID;
let score = 0;

// List of word in an array
const wordsList = [
  "father",
  "centre",
  "computer",
  "health",
  "imagination",
  "love",
];

// DOM Elements
const $wordToTypeDiv = document.querySelector("#wordToTypeDiv");
const $time = $("#time");
// Select a random word from the array for wordToType

function getRandomWord(listOfWords) {
  indexWordSelect = Math.floor(Math.random() * wordsList.length);
  return listOfWords[indexWordSelect];
}

function play() {
  $time.text(time);
  wordToType = getRandomWord(wordsList).split("");
  displayWordToType();
  indexCharacter = 0;
}

function displayWordToType() {
  $wordToTypeDiv.innerHTML = "";
  wordToType.forEach((char) => {
    $wordToTypeDiv.innerHTML += `<span class="span-paint">${char}</span>`;
  });
}

function checkWord() {
  if (indexCharacter == wordsList[indexWordSelect].length) {
    score += 1;
    wordsList.splice(indexWordSelect, 1);
    console.log(wordsList);
    play();
  }
}

function checkCharKey(key) {
  const spanList = document.querySelectorAll(".span-paint");
  if (key == wordToType[indexCharacter]) {
    spanList[indexCharacter].classList.add("correct-color");
    indexCharacter += 1;
    checkWord();
  } else {
    displayWordToType();
    indexCharacter = 0;
  }
}

function gameover() {
  console.log("game over", score);
  clearInterval(intervalID);
  time = 0;
}

function starGame() {
  $time.text(time);
  play();
  intervalID = setInterval(() => {
    time -= 1;

    if (time < 1) {
      gameover();
    }
    $time.text(time);
  }, 1000);
}

starGame();

// Key event
document.addEventListener("keyup", function (event) {
  checkCharKey(event.key);
});

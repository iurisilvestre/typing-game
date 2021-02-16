//TPC Typing game:
//- Mostra-nos uma palavra aleatória
// - 10 segundos para escrever essa palavra
// - Se errarmos uma letra, começamos do inicio nessa palavra
// - Se ficarmos sem tempo, perdemos
// - Se acertamos, passamos à próxima palavra aleatória

// List of word in an array
const wordsList = [
  "father",
  "centre",
  "computer",
  "health",
  "imagination",
  "Love",
];
// Select a random word from the array for wordToType
let wordToType;
function selectRandomWordFrom(listOfWords) {
  let randomIndex = Math.ceil(Math.random() * (wordsList.length - 1));
  return listOfWords[randomIndex];
}
wordToType = selectRandomWordFrom(wordsList);
console.log(wordToType);
wordToType = selectRandomWordFrom(wordsList);
console.log(wordToType);
// Show the wordToType in HTML
const showWord2TypeTitle = document.querySelector("#wordToType");
show;
// Create events to each key of letters in words of the array
// when the key of the first letter to paint is pressed, paint the letter and athorize to paint the next letter
// If the player clicked other key than the letter to paint, reset the letterToPaint
// When the wordToType is fully painted, show the next word to paint
// If the time of 10 is over, Game Over

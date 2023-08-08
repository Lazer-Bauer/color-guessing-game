let $numberToGuessColor = document.getElementById("rgb"); // get the h4 element from HTML into the variable $numberToGuessColor
let $colorToGuess = document.querySelectorAll(".color"); // get all the div with the class "color" into the variable $colorToGuess
let $notice = document.querySelector(".ifWon"); // get the h5(element that will show you if you won or not) into the variable $notice
$resetGame = document.querySelector(".reset-game");
console.log($resetGame);
console.log($numberToGuessColor);
console.log($colorToGuess);

$resetGame.addEventListener("click", resetGame);
// this function randomly choses a number between min-max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// this function calls function getRandomInt and returns number between 0-255 in the following way `rgb(11,234,255)`
function getRandomColor() {
  return `rgb(${getRandomInt(0, 256)} ${getRandomInt(0, 256)} ${getRandomInt(
    0,
    256
  )})`;
}

// this function calls function getRandomColor and applies it to every div by a for of (this for of loop is going through an array like)loop
function randomColorToDiv() {
  for (let i of $colorToGuess) {
    console.log(i);
    i.style.backgroundColor = getRandomColor();
  }
  // puts in the variable $numberToGuessColor a random style from the array like $colorToGuess
  $numberToGuessColor.innerHTML =
    $colorToGuess[getRandomInt(0, $colorToGuess.length)].style.backgroundColor;
}
randomColorToDiv();

// This for loop goes through all div and listens to click, if clicked calls function isCorrectColor
for (let i = 0; i < $colorToGuess.length; i++) {
  $colorToGuess[i].addEventListener("click", function () {
    isCorrectColor($colorToGuess[i].style.backgroundColor);
  });
}
// This function checks if color clicked is equaled to the rgb number in the h4
function isCorrectColor(colorPicked) {
  console.log(colorPicked);
  if ($numberToGuessColor.innerHTML === colorPicked) {
    $notice.innerHTML = `excellent you won!!!`;
    // alert("you won!");
  } else $notice.innerHTML = `You were wrong try again 😎`;
  // alert("nope");
}
function resetGame() {
  $notice.innerHTML = "";
  randomColorToDiv();
}

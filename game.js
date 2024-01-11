// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let numberBox1 = document.getElementById("number1");
let numberBox2 = document.getElementById("number2");
let number1;
let number2;
number1 = Math.floor(Math.random() * 100);
number2 = Math.floor(Math.random() * 100);

numberBox1.innerText = number1;
numberBox2.innerText = number2;

// Iteration 3: Creating variables required to make the game functional
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let multiplyBtn = document.getElementById("mul");
let divideBtn = document.getElementById("divide");
let modulusBtn = document.getElementById("modulus");
let score = 0;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let numberBox3 = document.getElementById("number3");
let number3;

// Iteration 5: Creating a randomise function to make the game functional
function randomise() {
  number1 = Math.floor(Math.random() * 100);
  number2 = Math.floor(Math.random() * 100);
  if (number1 < number2) {
    [number1, number2] = [number2, number1];
  }
  numberBox1.innerText = number1;
  numberBox2.innerText = number2;

  const outputArray = [
    Math.floor(number1 + number2),
    Math.floor(number1 - number2),
    Math.floor(number1 * number2),
    Math.floor(number1 / number2),
    Math.floor(number1 % number2),
  ];

  number3 = outputArray[Math.floor(Math.random() * 5)];
  numberBox3.innerText = number3;
}
randomise();

// Iteration 6: Making the Operators (button) functional
function checkOperation(result, expected) {
  if (result === expected) {
    score++;
    randomise();
    resetTime();
  } else {
    location.href = "./gameover.html";
  }
}

plusBtn.onclick = () => checkOperation(Math.floor(number1 + number2), number3);
minusBtn.onclick = () => checkOperation(Math.floor(number1 - number2), number3);
multiplyBtn.onclick = () =>
  checkOperation(Math.floor(number1 * number2), number3);
divideBtn.onclick = () =>
  checkOperation(Math.floor(number1 / number2), number3);
modulusBtn.onclick = () =>
  checkOperation(Math.floor(number1 % number2), number3);

// Iteration 7: Making Timer functional
let time = 30;
let timer = document.getElementById("timer");
let timerId;

function updateTimerDisplay() {
  timer.innerText = time;
}

function startTimer() {
  time = 30;
  updateTimerDisplay();
  timerId = setInterval(() => {
    time--;
    updateTimerDisplay();
    if (time === 0) {
      gameOver();
    }
    localStorage.setItem("gameScore", score);
  }, 1000);
}

startTimer();

function resetTime() {
  clearInterval(timerId);
  startTimer();
}

function gameOver() {
  location.href = "./gameover.html";
}

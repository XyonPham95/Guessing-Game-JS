let randomNumber = Math.ceil(Math.random() * 100);

let userGuess = document.getElementById("userInput");
let guessButton = document.getElementById("guessButton");
let resultArea = document.getElementById("resultArea");
let message = "";
let chanceArea = document.getElementById("chanceArea");
let outputHistory = [];
let resetButton = document.getElementById("resetButton");

let chance = 3;
chanceArea.innerHTML = `Chance: ${chance}`;

guessButton.addEventListener("click", guess);

function guess() {
  chance = chance - 1;

  let userNumber = userGuess.value;
  outputHistory.push(userNumber);

  document.getElementById("outputHistory").innerHTML = `${outputHistory}`;

  if (userNumber == randomNumber) {
    message = "ConGrat";
  } else if (userNumber > randomNumber) {
    message = "Too High";
  } else if (userNumber < randomNumber) {
    message = "Too Low";
  }

  if (chance === 0) {
    guessButton.disabled = true;
    guessButton.innerHTML = "Game Over";
  }

  resultArea.innerHTML = `${message}`;
  chanceArea.innerHTML = `Chance: ${chance}`;
}

resetButton.addEventListener("click",reset);


function reset(){
    userGuess.value ="";
    document.getElementById("outputHistory").innerHTML = ``;
    resultArea.innerHTML = ``;
    chance = 3;
    randomNumber = Math.ceil(Math.random()*100); 
    message = '';
    outputHistory = [];
    guessButton.disabled=false;
    guessButton.innerHTML = "Test your luck"
    chanceArea.innerHTML = `Chance: ${chance}`;
    document.getElementById("text").innerHTML = "Seconds";
    time=11
    clearInterval(myTime);
timecounting()
}

let time = 11
let myTime; 
function timecounting() {
    myTime = setInterval(() => {
        time -= 1
        if (time == 0) { 
            clearInterval(myTime); 
            document.getElementById("text").innerHTML = "TIME UP";   
        
            guessButton.disabled = true;
            guessButton.innerHTML = "Game Over"; 
            }
    document.getElementById('timecount').innerHTML = time
    }, 1000)
    
}
timecounting()

 


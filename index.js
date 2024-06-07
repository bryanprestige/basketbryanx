
let homeScore = document.getElementById("scoreboardhome");
let guestScore = document.getElementById("scoreboardguest");
let timerDisplay = document.getElementById("timer")
let scoreHome = 0;
let scoreGuest = 0;


let timer;
let initialTime = 15 * 60;
let timeRemaining = initialTime;

function add1home(){
    scoreHome += 1;
    homeScore.innerText = scoreHome;
     winner();
}

function add2home(){
    scoreHome += 2;
    homeScore.innerText = scoreHome;
     winner();
}

function add3home(){
    scoreHome += 3;
    homeScore.innerText = scoreHome;
     winner();
}

function resethome(){
    scoreHome = 0;
    homeScore.innerText = 0;
     winner();
}

function add1guest(){
    scoreGuest += 1;
    guestScore.innerText = scoreGuest;
     winner();
}

function add2guest(){
    scoreGuest += 2;
    guestScore.innerText = scoreGuest;
     winner();
}

function add3guest(){
    scoreGuest += 3;
    guestScore.innerText = scoreGuest;
    winner();
}

function resetgame() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  scoreHome = 0;
  scoreGuest = 0;
  homeScore.style.border = '3px solid #243D4B';
  guestScore.style.border = '3px solid #243D4B';
  resetTimer();
}

function winner() {
  homeScore.style.border = '3px solid #243D4B';
  guestScore.style.border = '3px solid #243D4B';
  if (scoreHome > scoreGuest) {
    homeScore.style.border = '3px solid #f94f6d';
  } else if (scoreGuest > scoreHome) {
    guestScore.style.border = '3px solid #f94f6d';
  } 
  else {
    homeScore.style.border = '3px solid #FFA500';
    guestScore.style.border = '3px solid #FFA500';
  }
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeRemaining--;
        if (timeRemaining < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeRemaining = initialTime;
    timerDisplay.textContent = "15:00";
    startTimer();
}

startTimer();
// global constants
const clueHoldTime = 1000; // duration of clue holding in ms
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const mistakeLimit = 3;
//Global Variables
var pattern = [];
var patternSize;  // Expect this to be reset to a different value on starting game
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0-1
var guessCounter = 0;
var mistakes = 0;

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);


function makePattern(size){
  for(var i = 0; i < size; i++){
    pattern[i] = Math.floor(Math.random()*4) + 1;
  }
  console.log("prepared pattern [" + pattern + "]");
}

function startGame() {
  //initialize game variables
  let sizeList = document.getElementById("sizeOptions");
  patternSize = sizeList.options[sizeList.selectedIndex].value;
  makePattern(patternSize)
  progress = 0;
  gamePlaying = true;
  //swap the Start and Stop buttons
  document.getElementById("startBox").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  //Give out the first clue
  playClueSequence();
}

function stopGame() {
  //reset game variables
  gamePlaying = false;
  //swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBox").classList.remove("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  //disable game buttons
  document.getElementById("gameButtonArea").classList.add("disabled");
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay/1000 + "s")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  //setTimeOut(enable game buttons after sequence is played)
  setTimeout(enableGameButtons, delay);
}

function enableGameButtons() {
  document.getElementById("gameButtonArea").classList.remove("disabled");
}

function mistake(){
  if(mistakes < mistakeLimit-1){
    mistakes++;
    alert("That was an incorrect selection. You are allowed " + (mistakeLimit-mistakes) + " more mistakes");
  } else if(mistakes < mistakeLimit){
    mistakes++;
    alert("That was an incorrect selection. You are allowed no more mistakes");
  } else{
    looseGame();
  }
}

function looseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Congrats! You won.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  //game logic
  if(btn != pattern[guessCounter])
    mistake();
  else if(guessCounter < progress)
    guessCounter++;
  else if(progress < patternSize-1 ){
    progress++;
    playClueSequence();
  }
  else
    winGame();
}

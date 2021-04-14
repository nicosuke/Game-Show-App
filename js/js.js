const querty = document.getElementById("querty");
const phrase = document.getElementById("phrase");
const reset = document.querySelector(".btn__reset");
let missed = 0;
const overlay = document.getElementById("overlay");
const screenTitle = overlay.querySelector("h2");
const scoreBoard = document.getElementById("scoreboard");
const phrases = [
    "hello world",
    "I like fish",
    "cara de papa",
    "my parrot is cute",
    "alex will bite you",
    "welcome to my house"
];

let correct = 0;
const lose = "lose";
const winning = "win";

reset.addEventListener("click", (i) => {
    if (i.target.textContent == "Start Game") {
overlay.classList.add("hidden");
    } else if (i.target.textContent == "Play Again") {
     document.location.reload();   
    }  
});

function addPhrase(arr){
function getRandomPhraseAsArray(arr){
   const random = Math.floor(Math.random() * 6 );
   const randomPhrase = arr[random];
   const phraseArr = randomPhrase.split("");
   return phraseArr; 
};
const phraseArr = getRandomPhraseAsArray(phrases);

for (let i = 0; i < phraseArr.length; i++){
    const li = document.createElement("li");
    const ul = phrase.querySelector("ul");
    li.textContent = phraseArr[i].toUpperCase();
ul.appendChild(li);
let character = phraseArr[i];
if (character == " " ) {
    li.classList.add("space");
} else {
    li.classList.add("letter");
}
}
}
addPhrase(phrases);
const phraseLI = phrase.querySelectorAll("li.letter");


function endGame(result) {
    overlay.classList.replace("start", result);
    screenTitle.textContent = "you " + result + "!!";
    reset.textContent = "Play Again";
    overlay.classList.remove("hidden");
};

function checkWin() {
    if (missed >=5) {
        endGame(lose);
    } else if (correct == phraseLI.length) {
        endGame(winning);
    }
};



function removeHearts() {
const heart = scoreBoard.querySelectorAll('[src="images/liveHeart.png"]')[0];
    heart.src = "images/lostHeart.png";
};

let wrong = 0;
qwerty/addEventListener("click", (e) => {
    if (e.target.tagName =="BUTTON") {
        const guess = e.target.textContent;
        const guessUpper = guess.toUpperCase();
        e.target.disabled = true;
        wrong = 0;

        for (let i = 0; i < phraseLI.length; i++) {
       if (guessUpper == phraseLI[i].textContent) {
           phraseLI[i].classList.add("show");
           correct +=1;
           checkWin();
       } else {
           wrong += 1;
           if (wrong == phraseLI.length) {
               missed+= 1;
               removeHearts();
               checkWin();
           }
       }
        }
    }
});
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
let missed = 0;
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
function getRandomPhraseAsArray(arr) {
   const random = math.floor(Math.random()*6);
   const randomPhrase = arr[random];
   const phraseArr = ramdomPhrase.split("");
   return phraseArr; 
};
const phraseArr = getRandomPhraseAsArray(phrases);

for (let i = 0; i < phraseArr.lenth; i++){
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


//reset keyboard
const keys = keyboard.querySelectorAll("button");
for(a = 0; a < keys.length; a++) {
    if (keys[a].className === "chosen") {
        keys[a].removeAttribute("class");
        keys[a].disabled = false;
    }
}



//resethearts
let hearts = document.querySelector.call(".tries > img[src='images/lostHeart.png']");
for (b = 0; b < hearts.length; b++) {
    hearts[b].setAttribute("src", "images/liveHeart.png")
}


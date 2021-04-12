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


//reset phrase
const characters =document.querySelectorAll("#phrase li");
for (i = 0; i < characters.lenth; i++) {
    characters[i].remove();
}



// get random sentence
function getRandomPhraseAsArray(arr) {
   const random = math.floor(Math.random()*6);
   const randomPhrase = arr[random];
   const phraseeArr = ramdomPhrase.split("");
   return phraseArr; 
};

//get characters
letter = document.querySelectorAll(".letter");

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


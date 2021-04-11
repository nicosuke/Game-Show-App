const keyboard = document.getElementById("querty");
const phase = document.getElementById("phase");
const boton = document.getElementsByClassName("btn__reset");
let missed = 0;
const overlay = document.getElementById("overlay");

const phrases = [
    "hello world",
    "I like fish",
    "cara de papa",
    "my parrot is cute",
    "alex will bite you",
    "welcome to my house"
];
//start button
boton.addEventListener("click", () => {
    overlay.style.display = "none";

    if (boton.textContent === "New Game") {
        overlay.classList.remove("win","lose");
        let completeText = overlay.querySelector("h3");
        completeText.remove();
    }

});
//reset phrase
const characters =document.querySelectorAll("#phrase li");
for (i = 0; i < characters.lenth; i++) {
    characters[i].remove();
}



// get random sentence
function getRandomPhraseAsArray(yo){
   let a = math.floor(Math.random()*6);
   let phrase = yo[n].split("");
   return phrase; 
}

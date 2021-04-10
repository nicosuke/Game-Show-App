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
boton.addEventListener("click", function(){
    overlay.style.display = "none";
});


// get random sentence
function getRandomPhraseAsArray(yo){
   let a = math.floor(Math.random()*6);
   let phrase = yo[n].split("");
   return phrase; 
}

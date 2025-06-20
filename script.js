// JavaScript goes here.
let button = document.querySelector("button");

let resultText = document.querySelector(".result-text");

button.addEventListener("click", function() {
    let word = document.querySelector(".word").value;
    let vibe = document.querySelector(".vibe").value;
    let role = document.querySelector(".role").value;
    let disney = document.querySelector(".disney");
    let understood = document.querySelector(".understood").value;
    let petPeeve = document.querySelector(".pet-peeve").value;
    let strength = document.querySelector(".strength").value;
    if(word === "Ohana" || word ==="Aloha" && vibe === "Hurt" && role === "Wild card" || role === "Joker" && disney === "Lilo"  && understood === "Wild" || understood === "Weird" && petPeeve === "Calm down" || petPeeve === "Ignored" || petPeeve === "Routines" && strength === "Empathy" || strength === 'Creativity'){
        resultText.innerHTML = "You got Lilo!";
    } else if(word === "Ohana" || word === "Pono" || word === "Mana" && vibe ==="Calm" || vibe === "Laugh"  && role === "Mom" || role === "Fixer" && disney === "Jumba" || disney === "Pleakley" && understood === "Trying" || understood === "Careless" && petPeeve === "Calm down" || petPeeve === "Change plans" && strength === 'Resilience' || strength === "Loyalty"){
        resultText.innerHTML = "You got Nani";
    } else if(word === "Ohana" && vibe === "Bite" || vibe === "Hurt" && role === "Wild card" && disney === "Stitch" && understood === "Wild" && petPeeve === "Calm down" && strength === "Loyalty"){
        resultText.innerHTML = "You got Stitch!";
    } else if(word === "Aloha" && vibe === "Hurt" || vibe === "Laugh" && role === "Mom" || role === "Fixer" && disney === "Pleakley" && understood === "Weird" || understood === "Trying" && petPeeve === "Calm down" || petPeeve === "Change plans" && strength === "Empathy" || strength === "Loyalty"){
        resultText.innerHTML = "You got Pleakley!";
    } else {
        resultText.innerHTML = "There is no Lilo and Stitch character for you.";
    }

});
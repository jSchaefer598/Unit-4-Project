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
    if(word === "Ohana - Family means nobody gets left behind" || word ==="Aloha - Love, peace, hello, and goodbye" && vibe === "Be hurt, but try to understand why" && role === "The wild card" || role === "The joker" && disney === "Lilo giving Pudge the fish a peanut butter sandwich"  && understood === "I act wild, but I care a lot more than I let out" || understood === "I'm not weird - I just see the world differently" && petPeeve === 'People telling me to "calm down"' || petPeeve === 'Being ignored or dismissed' || petPeeve === 'Boring routines or small talk' && strength === 'Empathy - I feel things deeply' || strength === 'Creativity - I make magic out of chaos'){
        resultText.innerHTML = "You got Lilo!";
    } else if(word === "Ohana - Family means nobody gets left behind" || word === "Pono - Righteousness, balance" || word === "Mana - Spiritual energy, power" && vibe ==="Stay calm but replay it in your head for days" || vibe === "Laugh and probably agree"  && role === "The mom friend" || role === "The fixer" && disney === "Jumba gleefully explaining chaos to the council" || disney === "Pleakley panicking in a disguise" && understood === "I'm trying, even if I seem like a mess" || understood === "I'm not careless - I just think differently" && petPeeve === 'People telling me to "calm down"' || petPeeve === 'Plans changing last minute' && strength === 'Resilience - I bounce back, no matter what' || strength === "Loyalty - I'd do anything for the people I love"){
        resultText.innerHTML = "You got Nani";
    } else if(word === "Ohana - Family means nobody gets left behind" && vibe === "Bite them.Jk.(Not Really.)" || vibe === "Be hurt, but try to understand why" && role === "The wild card" && disney === "Stitch destroying Lilo's drawing then feeling bad" && understood === "I act wild, but I care a lot more than I let out" && petPeeve === 'People telling me to "calm down"' && strength === "Loyalty - I'd do anything for the people I love"){
        resultText.innerHTML = "You got Stitch!";
    } else {
        resultText.innerHTML = "There is no Lilo and Stitch character for you.";
    }
});
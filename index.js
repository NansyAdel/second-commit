const messages = [
    " room without books is like a body without a soul",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
     "You only live once, but if you do it right, once is enough",
     "Be the change that you wish to see in the world",
     "If you tell the truth, you don't have to remember anything",
     "To live is the rarest thing in the world. Most people exist, that is all."
 ];
 
 const button = document.getElementById("messageButton");
 const display = document.getElementById("messageDisplay");
 
 function showRandomMessage() {
    
     const randomIndex = Math.floor(Math.random() * messages.length);
     display.textContent = messages[randomIndex];
 }
 
 button.addEventListener("click", showRandomMessage);
 
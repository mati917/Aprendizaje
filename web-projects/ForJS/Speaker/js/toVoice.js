// Text to Speak
document.getElementById('speak').addEventListener('click', ()=>{
    decir(document.getElementById('texto').value);
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

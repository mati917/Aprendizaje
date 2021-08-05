// Voice to text
let rec;
if(!("webkitSpeechRecognition" in window)){
    alert("Esta función no está disponible para tu navegador :(");
}else{
    rec = new webkitSpeechRecognition();
    rec.lang = "es-AR";
    rec.continous = true;
    rec.interim = true;
    rec.addEventListener('result', iniciar);
}

function iniciar(event){
    for(i = event.resultIndex; i < event.results.lenght; i++){
        document.getElementById('texto').innerHTML = event.results[i][0].transcript;
    }
}

rec.start();
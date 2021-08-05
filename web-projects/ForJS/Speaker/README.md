# Speaker

## ¿De qué se trata?

En esta página se puede introducir un texto, y al tocar el botón, esta dirá a través de un motor de voz lo que hayas escrito. También funciona en viceversa: Si entras a *"[De voz a texto](https://mati917.github.io/Speaker/toText.html)"* podrás hablar, y la página escribirá en un cuadro de texto lo que hayas dicho.

<img src="C:\Users\Mati\Desktop\MATI\prog\www\textToSpeak\assets\img\pic01.png" alt="Pic01" style="zoom:50%;" />

<img src="C:\Users\Mati\Desktop\MATI\prog\www\textToSpeak\assets\img\pic02.png" style="zoom:50%;" />

**Esta página fue creada para probar mis habilidades en JavaScript**

---

## ¿Cómo funciona?

Esto funciona con dos scripts de JavaScript, muy sencillos y cortos.

- En el primero: Cuando tocas el botón se activará un evento, el cual hará "hablar" a la página.

  ```js
  // Text to Speak
  document.getElementById('speak').addEventListener('click', ()=>{
      decir(document.getElementById('texto').value);
  });
  
  function decir(texto){
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
  }
  ```

  `speechSynthesis` es lo que hace la magia. Puedes ver la documentación sobre esto en su sección en [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

- El segundo funciona casi igual: A través de un evento, activa el "micrófono", lo que después se insertará con un `.innerHTML`.

  ```js
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
  ```

  En este caso, `webkitSpeechRecognition()` es lo que hace posible esto. De nuevo, dejo su documentación acerca de esto en [Developer Mozilla](https://developer.mozilla.org/es/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
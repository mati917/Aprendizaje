# Tierra Girando :earth_americas:

## *Workshop de CSS*

### ¿De qué se trata?

Como todas las páginas en este [repositorio](https://github.com/mati917/Aprendizaje), fue creado para practicar mis habilidades. En este caso, de CSS y diseño/desarrollo web.

Es una animación hecha 100% con CSS, del planeta tierra que va girando sobre su propio eje. Sumado a otras animaciones de estrellas.

---

### ¿Cómo se hizo?

Son dos `div` y una imagen. El `div` padre funciona como contenedor, mientras que la imagen son las nubes, y el otro es La Tierra. Se dió esa forma con `border-radius: 50%;`.

Entonces... ¿cómo hiciste para que se mueva la imagen? Es simple. Usé `-webkit-animation` con keyframes. Dado que la imagen está hecha específicamente para este proyecto, da la ilusión de que está girando.

Las estrelllas son varios `div` hijos que miden 2x2px, `border-radius: 50%;` y con el pseudo-elemento `:nth-child(2n)` (para hijos pares) se pone una animación (con keyframes) haciendo que el `box-shadow` se expanda o comprima. Y para los impares se agregó `:nth-child(2n+1)`, y los keyframes se dan a distintos tiempos.

P.D.: Las animaciones al comienzo (del texto y el footer) están hechas con [animate.css](https://animate.style/).

![Screenshor](https://mati917.github.io/Aprendizaje/TierraGirando/img/screenshot.png)


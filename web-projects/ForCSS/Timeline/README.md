# Timeline vertical 🕑
## ¿De qué se trata esto?

Es un ejercicio que me propuse a hacer para mejorar mis habilidades en mi diseño web, comenzando a crear componentes más complejos.

---

## ¿Cómo se hizo?

Se usó [Bootstrap v5.0.2](https://getbootstrap.com/docs/5.0/getting-started/introduction/), más que nada para ver si era lo mismo si lo usaba o no. Algunos componentes pueden deformarse si añades los estilos de Bootstrap.

Pero bueno... para los eventos del timeline se utilizó [cards](https://getbootstrap.com/docs/5.0/components/card/), luego, en el contenedor padre del timeline, se hizo un `div` identificado como "line".
Al padre se le puso `position: relative;`; y a este *line*, `position: absolute; height: 100%;`. Es **muy importante** que al contenedor padre le pongas position relative, ya que sino, el height del *line* será de la altura de la pantalla.
Eso son los detalles técnicos a resaltar, ¡para ver el código fuente entra [aquí](https://github.com/mati917/Aprendizaje/VerticalTimeline)!

---

## Legales
Si eres un desarrollador, **eres libre de usar este componente**, no es necesaria ninguna mención. Si en tí está, puedes mencionarme en tu repositorio o en Twitter, ¡gracias!

Mi Twitter: https://twitter.com/mati_917/

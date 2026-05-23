# DESAFIO
**FACTORIAL**

# 🎉 ¡Súper Combinaciones Mágicas! 🎲

Una aplicación web educativa, interactiva y muy colorida diseñada para calcular combinaciones matemáticas sin repetición utilizando múltiples grupos de selección. Su estética lúdica y animada la hace ideal para introducir conceptos de probabilidad, estadística y análisis combinatorio de forma amigable y atractiva.

---

## 📋 Descripción

**¡Súper Combinaciones Mágicas!** es una calculadora probabilística enfocada en sorteos de múltiples urnas (como las loterías de tipo Powerball). Permite resolver de manera simultánea cuántas formas distintas existen para extraer subconjuntos de elementos de dos grupos independientes aplicando el principio multiplicativo.

### Características Principales:
* **Cálculo de Grandes Números:** Implementa aritmética de precisión arbitraria mediante `BigInt` en JavaScript, permitiendo manejar cifras astronómicas sin pérdida de precisión ni errores de redondeo.
* **Múltiples Grupos:** Calcula las combinaciones independientes para dos conjuntos y halla de manera automática el producto total de eventos posibles.
* **Interfaz Animada y Vibrante:** Diseñada con una paleta de colores llamativa, tipografías amigables, efectos responsivos al pasar el cursor (`hover`) y animaciones elásticas en los contenedores de resultados.
* **Desplazamiento Suave:** Al calcular, la pantalla realiza un auto-scroll fluido hacia el panel de resultados final.

---

## 🛠️ Requisitos

El proyecto se ejecuta por completo en el lado del cliente (navegador web), por lo que consume recursos mínimos. Solo necesitas:

1. **Un navegador web moderno:** Google Chrome, Mozilla Firefox, Microsoft Edge, Safari o Brave (es indispensable que sea una versión reciente para asegurar el correcto soporte de `BigInt` y variables CSS).
2. **Un editor de texto (Opcional):** Si deseas inspeccionar o modificar el código, se recomienda usar Visual Studio Code, Sublime Text o Notepad++.

---

## 🚀 Instrucciones de Instalación

Para montar y probar este proyecto de manera local, sigue estos sencillos pasos:

1. **Descargar los archivos:** Guarda los tres archivos principales en una misma carpeta en tu computadora:
   ```text
   📁 super-combinaciones-magicas
   ├── 📄 index.html
   ├── 📄 estilo.css
   └── 📄 java.js

2. **Verificar dependencias de enlace:** Asegúrate de que no se alteren los nombres de los archivos, ya que están vinculados de forma relativa dentro del código fuente.
3. **Ejecutar la herramienta:** No se requiere de ningún servidor local ni dependencias de Node.js. Simplemente haz **doble clic sobre el archivo index.html** y este se abrirá de inmediato en tu navegador predeterminado.

---

## 📖 Guía de Uso

La interfaz es directa e intuitiva. A continuación, se detalla un ejemplo práctico de uso basado en las opciones por defecto:

1. **Configurar el Grupo 1 (Bolitas Rojas 🐰):**
* Introduce el total de elementos disponibles en la casilla "Total de bolitas". *Por defecto: 59*.
* Coloca cuántos elementos se van a extraer en la casilla "¿Cuántas elegir?". *Por defecto: 5*.


2. **Configurar el Grupo 2 (Bola Dorada ⭐):**
* Introduce los elementos del segundo grupo ($n_2$). *Por defecto: 35*.
* Coloca cuántos se van a extraer de este grupo ($r_2$). *Por defecto: 1*.


3. **Ejecutar la magia:**
* Haz clic en el gran botón central **"✨ ¡CALCULAR AHORA! ✨"**.
* El sistema calculará las combinaciones individuales para cada bloque usando la fórmula:

Fórmula General de Combinaciones: C(n, r) = n! / (r! * (n - r)!)


* Al final de la página emergerá un panel animado mostrando el total combinado de formas de ganar: **175.223.510** opciones diferentes.



---

## 🤝 Contribuciones

Si deseas añadir nuevas funciones matemáticas o proponer mejoras de diseño estético, ¡toda ayuda es bienvenida!

### Pasos para colaborar:

1. Haz un **Fork** de este proyecto.
2. Crea una rama para tu característica de mejora (`git checkout -b feature/MejoraEstilo`).
3. Confirma tus cambios en los archivos locales (`git commit -m 'Agrega nuevas animaciones a las tarjetas'`).
4. Sube la rama a tu repositorio remoto (`git push origin feature/MejoraEstilo`).
5. Abre un **Pull Request** explicando detalladamente qué cambios introdujiste.

### Ideas sugeridas para implementar:

* Añadir un tercer grupo dinámico opcional.
* Permitir alternar entre cálculos con repetición y sin repetición.
* Agregar un validador estricto que impida que $r$ sea mayor que $n$ directamente en los campos de entrada visuales.

---

## 📄 Licencia

Este proyecto está bajo una licencia libre de uso educativo. Siéntete libre de modificarlo, adaptarlo a tus necesidades académicas o utilizarlo como base para tus propias aplicaciones interactivas.

**desarrolladora:** WARA VELASQUEZ

const CACHE_NAME = 'imc-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respond¡Hola! Buenos días. Para armar esta PWA con un diseño alineado a los estándares de iOS (Cupertino) y que procese los datos como enteros, necesitamos estructurar un proyecto web clásico (HTML, CSS y JS) junto con los archivos esenciales de una PWA (`manifest.json` y el Service Worker).

En Chile, la evaluación nutricional de adolescentes (5 a 19 años) se rige por las tablas de la OMS, lo que significa que el valor bruto del IMC debe cruzarse con la edad y el sexo para obtener el puntaje Z (Z-score). A nivel de interfaz, he dejado los campos preparados, y en la lógica he implementado el cálculo base del IMC, dejando el espacio donde podrías integrar un JSON con las tablas del MINSAL para la clasificación final.

Aquí tienes la estructura completa del proyecto:

### 1. Interfaz Principal (`index.html`)
Incluye las etiquetas meta específicas para que Safari en iOS trate la web como una aplicación nativa, ocultando la barra de navegación. El uso de `inputmode="numeric"` y `pattern="[0-9]*"` fuerza la apertura del teclado numérico en el iPhone.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>IMC Adolescentes</title>
    
    <!-- PWA & iOS Meta Tags -->
    <link rel="manifest" href="manifest.json">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="IMC Chile">
    <link rel="apple-touch-icon" href="icon-192.png">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="ios-header">
        <h1>Calculadora IMC</h1>
    </header>

    <main class="ios-content">
        <p class="section-title">DATOS DEL PACIENTE</p>
        <div class="ios-form-group">
            <div class="ios-input-row">
                <label for="edad">Edad</label>
                <input type="number" id="edad" inputmode="numeric" pattern="[0-9]*" placeholder="Ej. 14">
                <span class="unit">años</span>
            </div>
            <div class="ios-input-row">
                <label for="sexo">Sexo</label>
                <select id="sexo" dir="rtl">
                    <option value="f">Femenino</option>
                    <option value="m">Masculino</option>
                </select>
            </div>
            <div class="ios-input-row">
                <label for="peso">Peso</label>
                <input type="number" id="peso" inputmode="numeric" pattern="[0-9]*" placeholder="Ej. 58">
                <span class="unit">kg</span>
            </div>
            <div class="ios-input-row">
                <label for="altura">Altura</label>
                <input type="number" id="altura" inputmode="numeric" pattern="[0-9]*" placeholder="Ej. 170">
                <span class="unit">cm</span>
            </div>
        </div>

        <button id="btn-calcular" class="ios-button">Calcular IMC</button>

        <div id="resultado-container" class="resultado-card hidden">
            <h2 id="imc-valor">--</h2>
            <p id="imc-diagnostico">Ingresa los datos para calcular</p>
        </div>
    </main>

    <script src="app.js"></script>
</body>
</html>
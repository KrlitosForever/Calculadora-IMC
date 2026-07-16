# Calculadora IMC

Calculadora de Índice de Masa Corporal (IMC), pensada para adolescentes según los criterios de referencia del MINSAL. Es una **Progressive Web App (PWA)** con estética inspirada en iOS, funciona **100% offline** una vez instalada y no requiere ningún backend ni conexión a internet para operar.

## Características

- **Diseño estilo iOS**: tipografía del sistema (`-apple-system`), tarjetas redondeadas, colores y componentes inspirados en Human Interface Guidelines.
- **Modo oscuro automático**: se adapta según la preferencia del sistema (`prefers-color-scheme`).
- **Funciona offline**: un Service Worker cachea todos los recursos de la app para que funcione sin conexión, ideal para uso instalada como app en el celular.
- **Instalable (Add to Home Screen)**: gracias al `manifest.json` y los meta tags de iOS, se puede agregar a la pantalla de inicio como una app nativa.
- **Flujo continuo de cálculo**: al presionar "Calcular IMC" se muestra el resultado y los campos de altura/peso se limpian automáticamente para poder calcular otro IMC sin recargar la página.
- **Compatible con notch / safe area**: respeta los márgenes seguros de dispositivos con notch o Dynamic Island (`viewport-fit=cover`).

## Uso

1. Ingresa la altura en centímetros y el peso en kilogramos.
2. Presiona **Calcular IMC**.
3. Se muestra el valor del IMC junto con una categorización de referencia (bajo peso, saludable, sobrepeso, obesidad).
4. Los campos se reinician automáticamente para un nuevo cálculo.

> **Nota:** El diagnóstico clínico en adolescentes requiere contrastar el valor de IMC con las curvas de crecimiento de la OMS vigentes en Chile, según la edad exacta y el sexo biológico. Esta app entrega solo una referencia general.

## Instalación como app (iOS)

1. Abre la app en Safari.
2. Toca el botón de **Compartir**.
3. Selecciona **Agregar a pantalla de inicio**.
4. La app quedará disponible como cualquier otra app instalada, funcionando sin conexión a internet.

## Desarrollo local

Al ser una app estática (HTML/CSS/JS sin build), basta con servirla con cualquier servidor HTTP simple:

```bash
python3 -m http.server 8000
```

Luego abre `http://localhost:8000` en el navegador.

## Estructura del proyecto

```text
├── index.html            # Estructura de la app
├── manifest.json         # Manifest de la PWA
├── sw.js                 # Service Worker (cache offline)
├── css/
│   └── style.css         # Estilos con estética iOS (incluye modo oscuro)
├── js/
│   └── app.js             # Lógica de cálculo de IMC y registro del Service Worker
└── icons/
    ├── icon-192.png      # Ícono de la app (192x192)
    └── icon-512.png      # Ícono de la app (512x512)
```

## Licencia

Este proyecto está bajo la licencia [GPL-3.0](LICENSE).

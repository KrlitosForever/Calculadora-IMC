document.addEventListener('DOMContentLoaded', () => {
    const alturaInput = document.getElementById('altura');
    const pesoInput = document.getElementById('peso');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultadoDiv = document.getElementById('resultado');
    const imcValor = document.getElementById('imc-valor');
    const imcDiagnostico = document.getElementById('imc-diagnostico');

    calcularBtn.addEventListener('click', () => {
        // Parsear como enteros
        const alturaCm = parseInt(alturaInput.value, 10);
        const pesoKg = parseInt(pesoInput.value, 10);

        if (!alturaCm || !pesoKg || alturaCm <= 0 || pesoKg <= 0) {
            alert("Por favor, ingresa valores enteros válidos.");
            return;
        }

        // Transformación matemática: cm a metros
        const alturaM = alturaCm / 100;
        const imc = pesoKg / (alturaM * alturaM);

        // Mostrar resultado (1 decimal)
        imcValor.textContent = imc.toFixed(1);
        
        // Categorización general (Referencia simple)
        // OJO: En adolescentes reales se usan percentiles OMS, pero esto da una guía base
        let diagnostico = "";
        let color = "";

        if (imc < 18.5) {
            diagnostico = "Bajo peso";
            color = "#FF9500"; // Naranja iOS
        } else if (imc >= 18.5 && imc <= 24.9) {
            diagnostico = "Saludable";
            color = "#34C759"; // Verde iOS
        } else if (imc >= 25 && imc <= 29.9) {
            diagnostico = "Sobrepeso";
            color = "#FF9500"; // Naranja iOS
        } else if (imc >= 30 && imc <= 34.9) {
            diagnostico = "Obesidad";
            color = "#FF3B30"; // Rojo iOS
        } else if (imc >= 35) {
            diagnostico = "Obesidad extrema";
            color = "#8B0000"; // Rojo oscuro
        }

        imcDiagnostico.textContent = diagnostico;
        imcDiagnostico.style.color = color;
        imcValor.style.color = color;

        resultadoDiv.classList.remove('hidden');
    });

    // Registrar Service Worker para la PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registrado correctamente', reg))
            .catch(err => console.warn('Error al registrar Service Worker', err));
    }
});
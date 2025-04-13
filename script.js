// Selecionar elementos HTML para interação
const entradaTemp = document.getElementById("entradaTemp");
const btnParaCelsius = document.getElementById("paraCelsius");
const btnParaFahrenheit = document.getElementById("paraFahrenheit");
const resultado = document.getElementById("resultado");

// Função para converter Fahrenheit para Celsius
// Celsius para Fahrenheit
function converterParaFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(2);
}

// Fahrenheit para Celsius
function converterParaCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}

// Evento ao clicar no botão "Converter para Celsius"
btnParaCelsius.addEventListener("click", function () {
    const valor = parseFloat(entradaTemp.value);

    if (isNaN(valor)) {
        resultado.textContent = "Por favor, digite uma temperatura válida!";
        resultado.classList.remove("mostrar");
    } else {
        const convertido = converterParaCelsius(valor);
        resultado.textContent = `${valor} °F equivale a ${convertido} °C`;
        resultado.classList.add("mostrar");
    }
});

// Evento ao clicar no botão "Converter para Fahrenheit"
btnParaFahrenheit.addEventListener("click", function () {
    const valor = parseFloat(entradaTemp.value);

    if (isNaN(valor)) {
        resultado.textContent = "Por favor, digite uma temperatura válida!";
        resultado.classList.remove("mostrar");
    } else {
        const convertido = converterParaFahrenheit(valor);
        resultado.textContent = `${valor} °C equivale a ${convertido} °F`;
        resultado.classList.add("mostrar");
    }
});

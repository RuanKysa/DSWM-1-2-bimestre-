let numeros = [];

function adicionarNumero() {
    const inputNumero = document.getElementById("numero");
    const numero = parseFloat(inputNumero.value);
    if (!isNaN(numero)) {
        numeros.push(numero);
        inputNumero.value = "";
    } else {
        alert("Por favor, insira um número válido.");
    }
}

function calcularMedia() {
    const resultadoDiv = document.getElementById("resultado");
    if (numeros.length === 0) {
        resultadoDiv.textContent = "Nenhum número foi adicionado.";
        return;
    }
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    const media = soma / numeros.length;
    resultadoDiv.textContent = "A média dos números é: " + media.toFixed(2);
}

document.getElementById("adicionar").addEventListener("click", adicionarNumero);
document.getElementById("calcular").addEventListener("click", calcularMedia);



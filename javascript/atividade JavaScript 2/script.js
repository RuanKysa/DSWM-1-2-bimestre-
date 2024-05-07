document.getElementById("calcular").addEventListener("click", function () {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        const maiorNumero = encontrarMaiorNumero(numero1, numero2);
        document.getElementById("resultado").innerText = `O maior número é: ${maiorNumero}`;
    } else {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
    }
});

function encontrarMaiorNumero(num1, num2) {
    return Math.max(num1, num2);
}


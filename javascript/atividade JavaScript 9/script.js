document.getElementById("calcular").addEventListener("click", function () {
    const numerosString = document.getElementById("numeros").value;


    const numeros = numerosString.split(",").map(numero => parseFloat(numero.trim()));


    if (numeros.some(numero => isNaN(numero))) {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos separados por vírgula.";
        return;
    }

    const maiorNumero = encontrarMaiorNumero(numeros);


    document.getElementById("resultado").innerText = `O maior número é: ${maiorNumero}`;
});

function encontrarMaiorNumero(vetor) {
    if (vetor.length === 0) {
        return "Vetor vazio";
    }

    let maior = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    return maior;
}

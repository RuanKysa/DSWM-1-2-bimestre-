document.getElementById("calcular").addEventListener("click", function() {
    const numero = parseInt(document.getElementById("numero").value);


    if (numero >= 0 && Number.isInteger(numero)) {
        const fatorial = calcularFatorial(numero);
        document.getElementById("resultado").innerText = `O fatorial de ${numero} é: ${fatorial}`;
    } else {
        document.getElementById("resultado").innerText = "Por favor, insira um número inteiro positivo.";
    }
});

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

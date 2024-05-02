document.getElementById("criarMatriz").addEventListener("click", function() {
    const linhas = parseInt(document.getElementById("linhas").value);
    const colunas = parseInt(document.getElementById("colunas").value);

    const inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.setAttribute("id", `elemento_${i}_${j}`);
            inputsDiv.appendChild(input);
        }
        inputsDiv.appendChild(document.createElement("br"));
    }

    document.getElementById("matrizInput").style.display = "block";
});

document.getElementById("calcularMedia").addEventListener("click", function() {
    const linhas = parseInt(document.getElementById("linhas").value);
    const colunas = parseInt(document.getElementById("colunas").value);
    let soma = 0;

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            const elemento = parseInt(document.getElementById(`elemento_${i}_${j}`).value);
            soma += elemento;
        }
    }

    const totalElementos = linhas * colunas;
    const media = soma / totalElementos;

    document.getElementById("resultado").innerText = `A média dos elementos da matriz é: ${media.toFixed(2)}`;
});

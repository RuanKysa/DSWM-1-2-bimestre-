document.getElementById("verificar").addEventListener("click", function() {
    const valor = document.getElementById("valor").value;

    if (valor === "a") {
        document.getElementById("mensagem").innerText = "A";
    } else if (valor === "b") {
        document.getElementById("mensagem").innerText = "B";
    } else {
        document.getElementById("mensagem").innerText = "Outra letra";
    }
});

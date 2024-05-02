document.getElementById("escolher").addEventListener("click", function() {
    const opcaoSelecionada = document.getElementById("opcao").value;

    switch(opcaoSelecionada) {
        case "1":
            exibirMensagem("Opção 1 escolhida");
            break;
        case "2":
            exibirMensagem("Opção 2 escolhida");
            break;
        case "3":
            exibirMensagem("Opção 3 escolhida");
            break;
        default:
            exibirMensagem("Opção inválida");
            break;
    }
});

function exibirMensagem(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}

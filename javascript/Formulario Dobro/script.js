
// const formulario = document.getElementById('meuFormulario');

// formulario.addEventListener('submit', function (evento) {
//     evento.preventDefault(); // impede o envio do formulário

//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;

//     if (nome === '' || email === '' || senha === '') {
//         alert('Preencha todos os campos');
//         return false;
//     }
//     // código para enviar os dados para o servidor
// });


const conta = document.getElementById('calcular');
conta.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const numero = document.getElementById('numero').value;

    const resultado = numero * 2;
    alert(resultado);
    return false;

});
let nome = prompt("Qual é o seu nome?");
console.log("Olá, " + nome + "!");
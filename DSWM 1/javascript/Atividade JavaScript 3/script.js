
const form = document.getElementById("nota");
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nota = Number(document.getElementById("nota1").value);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    document.querySelector("#resultado").innerHTML = "Insira uma nota válida";
    return false;
  }
  
  function resultado(){
    if (nota >= 8) {
      document.querySelector("#resultado").innerHTML = "Aprovado com louvor";
    } else if (nota >= 7) {
      document.querySelector("#resultado").innerHTML = "Aprovado";
    } else {
      document.querySelector("#resultado").innerHTML = "Reprovado";
    }
  }
  resultado();
});




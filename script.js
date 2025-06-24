function inserirNome () {
    let nomeUsuario = prompt("Qual o seu Nome");
    let elemento = document.querySelector("nome-usuário");
    elemento.textContent = nomeUsuario;
}
inserirNome();

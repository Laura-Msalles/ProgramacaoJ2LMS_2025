function inserirNome () {
    let nomeUsuario = prompt("Qual o seu Nome?");
    let elemento = document.querySelector("#nome-usuário");
    elemento.textContent = nomeUsuario;
}
inserirNome ();

function mudarCor(){
    const elemento = document.getElementById("nome-usuário"); 
    elemento.style.color = "pink";
   } 
 mudarCor();
let linguagens = ["JavaScript","Python","C"];​
console.log(linguagens[0]);

const item = document.querySelector("#lista");
item.textcontent =  `${linguagens[0]}, ${linguagens[1]} e ${linguagens[2]}`;

let aluno = {
    nome: "Gabriel",
    idade: 13,
    anoLetivo: "2ª série",
    materiasFavoritas: ["Geografia", "Programação e Artes"]
}
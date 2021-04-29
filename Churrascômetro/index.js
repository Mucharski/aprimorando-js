import { Man, Woman, Kid } from "./models/People.js"

let quantidadeHomem = document.getElementById("homens");
let quantidadeMulher = document.getElementById("mulheres");
let quantidadeCrianca = document.getElementById("criancas");
let duracao = document.getElementById("duracao");

const buttonCalc = document.getElementById("btnCalcular");

buttonCalc.addEventListener("click", () => {
    if (quantidadeHomem.value == "" || quantidadeMulher.value == "" || quantidadeCrianca.value == "" || duracao.value == "") {
        alert("Preencha todos os campos")
    } else {
        let man = new Man(quantidadeHomem.value);
        let woman = new Woman(quantidadeMulher.value);
        let kid = new Kid(quantidadeCrianca.value);

        let active = document.getElementsByClassName("active");
        let guardaAtivos = []

        for (let ac of active) {
            let elemento = ac.getAttribute("id")
            guardaAtivos.push(elemento)
        }

        let qtdPao = (man.quantidade * man.paoDeAlho) + (woman.quantidade * woman.paoDeAlho) + (kid.quantidade * kid.paoDeAlho);
        let qtdQueijo = (man.quantidade * man.queijoCoalho) + (woman.quantidade * woman.queijoCoalho) + (kid.quantidade * kid.queijoCoalho);
        let qtdCarne = (man.quantidade * man.grama) + (woman.quantidade * woman.grama) + (kid.quantidade * kid.grama);
        let qtdFrango = (man.quantidade * man.grama) + (woman.quantidade * woman.grama) + (kid.quantidade * kid.grama);
        let qtdRefrigerante = (man.quantidade * man.refrigerante) + (woman.quantidade * woman.refrigerante) + (kid.quantidade * kid.refrigerante);
        let qtdCerveja = (man.quantidade * man.cerveja) + (woman.quantidade * woman.cerveja) + (kid.quantidade * kid.cerveja);


        console.log(qtdPao + " " + qtdQueijo + " " + qtdCarne + " " + " " + qtdFrango + " " + qtdRefrigerante + " " + qtdCerveja) // arrumar para não somar

    }
})


let imagens = document.querySelectorAll(".selecionar-imagem");

for (let i of imagens) {
    i.addEventListener("click", () => {
        manipularClasse(i);
    })
}

function manipularClasse(indice) {
    if (indice.classList == "selecionar-imagem active") {

        indice.classList.remove("active");
        indice.classList.add("deactive");

    } else {

        indice.classList.add("active");
        indice.classList.remove("deactive");

    }
}




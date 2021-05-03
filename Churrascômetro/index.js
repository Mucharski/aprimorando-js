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
        let woman = new Woman(quantidadeMulher.value); // instancia os objetos 
        let kid = new Kid(quantidadeCrianca.value);

        if (duracao.value <= 4) {

            let qtdPao = (man.quantidade * man.paoDeAlho) + (woman.quantidade * woman.paoDeAlho) + (kid.quantidade * kid.paoDeAlho) + " un.";
            let qtdQueijo = (man.quantidade * man.queijoCoalho) + (woman.quantidade * woman.queijoCoalho) + (kid.quantidade * kid.queijoCoalho) + " un.";
            let qtdCarne = ((man.quantidade * man.grama / 1000) + (woman.quantidade * woman.grama / 1000) + (kid.quantidade * kid.grama / 1000)).toFixed(3) + " kg";
            let qtdFrango = ((man.quantidade * man.grama / 1000) + (woman.quantidade * woman.grama / 1000) + (kid.quantidade * kid.grama / 1000)).toFixed(3) + " kg";
            let qtdRefrigerante = (man.quantidade * man.refrigerante * 2) + (woman.quantidade * woman.refrigerante * 2) + (kid.quantidade * kid.refrigerante * 2) + " litros";
            let qtdCerveja = (man.quantidade * man.cerveja) + (woman.quantidade * woman.cerveja) + (kid.quantidade * kid.cerveja) + " latas";

            var quantidadesArray = [qtdPao, qtdQueijo, qtdCarne, qtdFrango, qtdRefrigerante, qtdCerveja];

        } else {

            let qtdPao = ((man.quantidade * man.paoDeAlho) * 1.5) + ((woman.quantidade * woman.paoDeAlho) * 1.5) + (kid.quantidade * kid.paoDeAlho) + " un.";
            let qtdQueijo = ((man.quantidade * man.queijoCoalho) * 1.5) + ((woman.quantidade * woman.queijoCoalho) * 1.5) + (kid.quantidade * kid.queijoCoalho) + " un.";
            let qtdCarne = ((((man.quantidade * man.grama) * 1.5) / 1000) + (((woman.quantidade * woman.grama) * 1.2) / 1000) + (((kid.quantidade * kid.grama) * 1.1) / 1000)).toFixed(3) + " kg";
            let qtdFrango = ((man.quantidade * man.grama / 1000) + (woman.quantidade * woman.grama / 1000) + (kid.quantidade * kid.grama / 1000)).toFixed(3) + " kg";
            let qtdRefrigerante = (man.quantidade * man.refrigerante * 2) + (woman.quantidade * woman.refrigerante * 2) + (kid.quantidade * kid.refrigerante * 2) + " litros";
            let qtdCerveja = (man.quantidade * man.cerveja) + (woman.quantidade * woman.cerveja) + (kid.quantidade * kid.cerveja) + " latas";

            var quantidadesArray = [qtdPao, qtdQueijo, qtdCarne, qtdFrango, qtdRefrigerante, qtdCerveja]; // define um array com as quantidades para conseguir fazer dentro de um FOR

        }


        let active = document.getElementsByClassName("active");
        let guardaAtivos = [];

        for (let ac of active) {
            let elemento = ac.getAttribute("id");
            guardaAtivos.push(elemento); // salva todos elementos com a classe "active" no array, esses elementos as imagens selecionadas dentro da página
        }

        let contador = 0;
        for (let i of imagens) { // pegou a variavel imagens la de baixo - hoisting
            let atributo = i.getAttribute("id");
            if (guardaAtivos.indexOf(atributo) == -1) { // se o elemento não existir no array guardaAtivos fica marcado como "X"
                quantidadesArray[contador] = "N/A"
            }
            contador++;
        }

        let main = document.getElementsByTagName("main")[0];
        main.classList.add("none")

        let painelResultado = document.getElementsByClassName("painel-resultado")[0];
        painelResultado.style.display = "inline-block"

        let quantidadesTela = document.getElementsByClassName("resultado-calculo");


        for (let qtd in quantidadesTela) {
            quantidadesTela[qtd].innerHTML = quantidadesArray[qtd];
        }
    }
}); // fim do listener

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




let imagens = document.getElementsByClassName("selecionar-imagem");
for (let i in imagens) {
    imagens[i].addEventListener("click", () => {
        adicionarActive(i);
    })
}

function adicionarActive(indice) {
    if (imagens[indice].classList == "selecionar-imagem active") {

        imagens[indice].classList.remove("active");
        imagens[indice].classList.add("deactive");

    } else {

        imagens[indice].classList.add("active");
        imagens[indice].classList.remove("deactive");

    }
}
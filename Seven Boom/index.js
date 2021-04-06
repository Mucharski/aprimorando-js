const numeros = [1, 2, 7, 9, 8];
let frase;

for (num of numeros) {
    if (num === 7) {

        frase = "Boom!";
        break;

    } else {

        frase = "Não existe 7 no Array";

    }
}

console.log(frase);

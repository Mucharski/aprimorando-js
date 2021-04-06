let redundante = (stringRetorno) => {


    let str = () => {
        return stringRetorno; // função apenas retorna a string
    }

    return str(); //

}

console.log(redundante("Maçã"));
let redundante = (stringRetorno) => {


    let str = () => {
        return stringRetorno
    }

    return str();

}




console.log(redundante("Maçã"));
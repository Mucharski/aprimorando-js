let contaTrue = () => {

    let sortArray = new Array(true, false, true, true, true, false, false, false, true, false, true);
    let guardaTrue = 0;

    if (sortArray.length === 0) {
        guardaTrue = 0;
        console.log("Array vazio.")
    } else {

        for (i = 0; i < sortArray.length; i++) {
            if (sortArray[i] == true) {
                guardaTrue++;
            }
        }

    }

    return guardaTrue;

}

console.log(contaTrue());
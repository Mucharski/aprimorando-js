let contaTrue = () => {

    let sortArray = new Array(true, false, false, true, true, false, true, true, true, false, true);
    let guardaTrue = 0;

    for(i = 0; i < sortArray.length; i++) {
        if(sortArray[i] == true) {
            guardaTrue++;
        }
    }

    return guardaTrue;

}

console.log(contaTrue());
const btn = document.getElementById("btnTarefa");
let setTarefas, tabela = document.getElementById("tr");
var setStorage = [];


let tarefasArmazenadas = localStorage.getItem("Tarefa"); // pega os itens do local storage
tarefasArmazenadas = JSON.parse(tarefasArmazenadas); // transforma em objeto


if (tarefasArmazenadas != null) { // se o getItem retornar diferente de vazio, executa
    for (let i in tarefasArmazenadas) {
        let pegarTarefa = tarefasArmazenadas[i].tarefa;

        constructor(pegarTarefa);
        console.log(pegarTarefa);

        let tag = document.createElement("td");
        let texto = document.createTextNode(pegarTarefa)
        tag.appendChild(texto);
        tabela.appendChild(tag)
    }
}

function constructor(p1) {
    let tarefa = {
        tarefa: p1,
    }
    setStorage.push(tarefa);
}

btn.addEventListener("click", () => {

    const valueTarefa = document.getElementById("iptTarefa").value;
    constructor(valueTarefa);
    localStorage.setItem("Tarefa", JSON.stringify(setStorage));
    alert("Registro adicionado com sucesso!");
    document.location.reload();

})

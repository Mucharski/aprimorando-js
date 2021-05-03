export class Man {
    constructor(quantidade) {
        this.quantidade = quantidade;
        this.grama = 633;
        this.cerveja = 3;
        this.refrigerante = 1; // garrafas de 2 litros
        this.paoDeAlho = 2;
        this.queijoCoalho = 3;
    }
}

export class Woman {
    constructor(quantidade) {
        this.quantidade = quantidade;
        this.grama = 478;
        this.cerveja = 3;
        this.refrigerante = 1;
        this.paoDeAlho = 2; 
        this.queijoCoalho = 2;
    }
}

export class Kid {
    constructor(quantidade) {
        this.quantidade = quantidade;
        this.grama = 239;
        this.cerveja = 0;
        this.refrigerante = 0.5;
        this.paoDeAlho = 1.5; 
        this.queijoCoalho = 2;
    }
}
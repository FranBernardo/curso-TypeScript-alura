export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray= para funcoes somente leitura n permite alterar de forma alguma.
    listar() {
        return this.negociacoes;
    }
}

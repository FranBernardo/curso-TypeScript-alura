//Array<Negociacao> é igual a escrever assim Negociacao[]
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray= para funcoes somente leitura n permite alterar de forma alguma.
    // ReadonlyArray<Negociacao> é igual a escrever assim readonly
    listar() {
        return this.negociacoes;
    }
}

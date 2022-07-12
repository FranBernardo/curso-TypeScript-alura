import { Negociacao } from "./negociacao";
//Array<Negociacao> é igual a escrever assim Negociacao[]

export class Negociacoes{
    private negociacoes: Negociacao[] = []

    adicionar(negociacao: Negociacao){
        this.negociacoes.push(negociacao)

    }

    // ReadonlyArray= para funcoes somente leitura n permite alterar de forma alguma.
    // ReadonlyArray<Negociacao> é igual a escrever assim readonly
    listar(): readonly Negociacao[]{
        return this.negociacoes;
    }
}
import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = []

    adicionar(negociacao: Negociacao){
        this.negociacoes.push(negociacao)

    }

    // ReadonlyArray= para funcoes somente leitura n permite alterar de forma alguma.
    listar(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}
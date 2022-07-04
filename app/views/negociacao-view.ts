import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoView {
    private elemento: HTMLElement;
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }
    templete(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.listar().map(negociacao => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

    update(model: Negociacoes): void {
        const templete = this.templete(model);
        console.log(templete )
        this.elemento.innerHTML = templete
    }
}
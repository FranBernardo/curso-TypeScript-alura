import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";
const controlle = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controlle.adiciona();
});
const negociacaoView = new NegociacoesView('#negociacoesView');
// const templete = negociacaoView.templete();
// console.log(templete)

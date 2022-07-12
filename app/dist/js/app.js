import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";
const controlle = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controlle.adiciona();
    });
}
else {
    throw Error('verificar se forme existe');
}
const negociacaoView = new NegociacoesView('#negociacoesView');

import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacoes } from "./models/negociacoes.js";
import { NegociacaoView } from "./views/negociacao-view.js";


const controlle = new NegociacaoController()
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault()
    controlle.adiciona()
});

const negociacaoView = new NegociacaoView('#negociacoesView')
// const templete = negociacaoView.templete();
// console.log(templete)
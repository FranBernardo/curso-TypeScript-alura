import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controlle = new NegociacaoController()
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault()
    controlle.adiciona()
})
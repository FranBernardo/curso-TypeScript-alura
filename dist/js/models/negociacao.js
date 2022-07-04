export class Negociacao {
    // no typescript da para fazer dessa forma.
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // quando add o readonly ele tornar o metodo so leitura assim nao precisamos mais do get.
    // get data(){
    //     return this._data
    // }
    // get quantidade(){
    //     return this._quantidade
    // }
    // get valor(){
    //     return this._valor;
    // }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get Volume() {
        return this.quantidade * this.valor;
    }
}

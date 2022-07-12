export class Negociacao {
    // no typescript da para fazer dessa forma.
    constructor(
        private  _data: Date, 
        public readonly quantidade: number, 
        public readonly valor:number
        ) {}
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

    get data(): Date{
        const data = new Date(this._data.getTime())
        return data
    }

    get Volume() {
        return this.quantidade * this.valor
    }
    
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor)
    }
}
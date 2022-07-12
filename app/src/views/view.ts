export  abstract class View<T> {
    // proctected= significa que as filha de View deixa ver as propiedade.
    protected elemento: HTMLElement;
    private escapar = false;
// quando colocamos uma ? no parameto torna ele opcional, mas isso so vai funcionar se
// o parametro opcional foi os ultimo parametro
    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor) as HTMLElement;
        if(escapar){
            this.escapar = escapar
        }
    }
    update(model: T): void {
        let template = this.template(model)
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template
    }
    protected abstract template(model: T): string;
}
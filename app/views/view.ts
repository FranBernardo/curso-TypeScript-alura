export  abstract class View<T> {
    // proctected= significa que as filha de View deixa ver as propiedade.
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
    update(model: T): void {
        const template = this.template(model)
        this.elemento.innerHTML = template
    }
    protected abstract template(model: T): string;
}
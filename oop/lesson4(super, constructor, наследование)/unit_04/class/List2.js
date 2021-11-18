class List2 extends List {
    constructor(item) {
        super(item);
    }
    render(cssClass) {
        this.cssClass = cssClass;
        const ul = super.render();
        ul.classList.add(this.cssClass);
        document.querySelector('#app').append(ul);
    }
}
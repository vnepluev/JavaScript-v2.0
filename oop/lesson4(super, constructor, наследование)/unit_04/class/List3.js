class List3 extends List {
    constructor(cssClass, item) {
        super(item);
        this.cssClass = cssClass;
    }
    render() {
        const str = this.cssClass.join(' ');
        const ul = super.render();
        ul.setAttribute('class', str);
        return ul;
    }
}
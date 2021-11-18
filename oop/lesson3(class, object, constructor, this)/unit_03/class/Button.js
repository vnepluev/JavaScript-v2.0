class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }
    render() {
        const el = document.createElement('button');
        el.style.backgroundColor = this.background;
        el.textContent = this.value;
        el.width = this.width;
        el.height = this.height;
        return el;
    }
}
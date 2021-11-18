class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius = 0) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }
    render() {
        const el = super.render();
        el.style.borderRadius = this.borderRadius + 'px';
        return el;
    }
}
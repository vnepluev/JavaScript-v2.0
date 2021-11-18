class List {
    constructor(item) {
        this.item = item;
    }
    render() {
        const ul = document.createElement('ul');
        this.item.forEach(el => {
            const li = document.createElement('li');
            li.textContent = el;
            ul.append(li);
        });
        return ul;
    }
}
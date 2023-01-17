export default class Section {
    constructor({ renderer }, selector) {
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    clear() {
        this._container.innerHTML = '';
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems(items) {
        this.clear();
        items.forEach((item) => this._renderer(item));
    }
}

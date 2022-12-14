export default class Section {
    constructor({ items, renderer }, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(container);
    }

    clear() {
        this._container.innerHTML = '';
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this.clear();
        this._items.forEach((item) => this._renderer(item));
    }
}

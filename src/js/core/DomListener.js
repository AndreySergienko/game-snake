export class DomListener {
    constructor(listeners = []) {
        this.listeners = listeners
    }

    initDOMListeners () {
        if (!this.listeners.length) return
        this.listeners.forEach((item) => {
            if (!item.$el) {
                throw new Error(`Элемент привязки слушаталей не был указан для ${this.name} компонента`)
            }
            const $el = document.querySelector(item.$el)
            item.listeners.forEach((listener) => {
                const method = listener.method
                if (!this[method]) {
                    throw new Error(`Метод ${method} не был объявлен внутри ${this.name} компонента`)
                }
                $el.addEventListener(listener.value, this[method])
            })
        })
    }

    removeDOMListeners () {
        this.listeners.forEach((item) => {
            if (!item.$el) {
                throw new Error(`Элемент привязки слушаталей не был указан для ${this.name} компонента`)
            }
            const $el = document.querySelector(item.$el)
            item.listeners.forEach((listener) => {
                const method = listener.method
                if (!this[method]) {
                    throw new Error(`Метод ${method} не был объявлен внутри ${this.name} компонента`)
                }
                $el.removeEventListener(listener.value, this[method])
            })
        })
    }
}

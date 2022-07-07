import { DomListener } from './DomListener'

export class BaseComponent extends DomListener {
    constructor(options) {
        super(options.listeners)
        this.name = options.name || ''
    }

    init () {
        this.initDOMListeners()
    }

    destroy () {
        this.removeDOMListeners()
    }

    toHTML () {
        return ''
    }
}

import { createCounter, createCounterCondition } from './counter.template'
import { ConfigurationComponent } from '../../../core/components/ConfigurationComponent'

export class Counter extends ConfigurationComponent {
    constructor() {
        super({
            listeners: [{
                $el: '#field-counter',
                listeners: [{
                    method: 'onClick',
                    value: 'click'
                }]
            }],
            name: 'Counter'
        })
    }

    toHTMLCondition() {
        return createCounterCondition()
    }

    toHTML() {
        return createCounter()
    }

    onClick() {
        console.log('counter click')
    }
}

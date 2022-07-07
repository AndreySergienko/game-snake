import { createBarrier, createBarrierCondition } from './barrier.template'
import { ConfigurationComponent } from '../../../core/components/ConfigurationComponent'

export class Barrier extends ConfigurationComponent {
    constructor() {
        super({
            listeners: [
                {
                    $el: '#on-barrier',
                    listeners: [{
                        value: 'click',
                        method: 'onBarrier'
                    }]
                },
                {
                    $el: '#off-barrier',
                    listeners: [{
                        value: 'click',
                        method: 'offBarrier'
                    }]
                }
            ],
            name: 'Barrier'
        })
    }

    toHTMLCondition() {
        return createBarrierCondition()
    }

    getAlgorithm() {
        console.log('Для алгоритма')
    }

    onBarrier() {
        console.log('onBarrier')
    }

    offBarrier() {
        console.log('offBarrier')
    }
}

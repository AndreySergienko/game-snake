import {TableComponent} from '../../core/components/TableComponent'
import { createPlayArea } from './playarea.template'

export class PlayArea extends TableComponent {
    constructor() {
        super({
            listeners: [],
            name: 'PlayArea'
        })
    }

    toHTML() {
        return createPlayArea()
    }
}

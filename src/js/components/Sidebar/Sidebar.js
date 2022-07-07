import { BaseComponent } from '../../core/BaseComponent'
import { createSidebarTemplate } from './sidebar.template'

const DELAY_ANIMATION = 1000

export class Sidebar extends BaseComponent {
    constructor(configuration) {
        super({
            listeners: [{
                $el: '#btn-start',
                listeners: [{
                    method: 'onStart',
                    value: 'click',
                }]
            }],
            name: 'Sidebar'
        })
        this.configuration = configuration
        this.$sidebar = null
        this.sidebarId = '#sidebar'
        this.configurationId = '#configuration'
    }

    toHTML() {
        return createSidebarTemplate(this.sidebarId, this.configurationId, this.configuration)
    }

    show() {
        setTimeout(() => {
            this.$sidebar = document.getElementById(this.sidebarId)
            this.$sidebar.classList.add('show')
        }, DELAY_ANIMATION)
    }

    hide() {
        setTimeout(() => {
            this.$sidebar.classList.remove('show')
        }, DELAY_ANIMATION)
    }

    onStart() {
        console.log('startGame')
    }

    init() {
        super.init()
        this.configuration.forEach(config => config.init())
    }
}

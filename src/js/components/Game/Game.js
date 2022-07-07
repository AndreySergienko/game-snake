export class Game {
    constructor($el, { menu, game, table, configuration = [] }) {
        this.$el = document.querySelector($el)
        this.menu = menu
        this.table = table
        this.game = game
        this.configuration = configuration
        this.configurationListInstance = []
    }

    initConfiguration () {
        if (!this.configuration.length) return
        this.configuration.forEach((Config) => {
            this.configurationListInstance.push(new Config())
        })
    }

    paintMenu() {
        const menu = new this.menu.value(this.configurationListInstance)
        this.$el.insertAdjacentHTML('afterBegin', menu.toHTML())
        if (this.menu.afterPaint) {
            menu[this.menu.afterPaint]()
        }
        menu.init()
    }

    render() {
        this.initConfiguration()
        this.paintMenu()
    }
}

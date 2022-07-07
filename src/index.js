import './styles/style.css'
import { Game } from './js/components/Game/Game'
import { Sidebar } from './js/components/Sidebar/Sidebar'
import { Snake } from './js/components/gameItems/Snake/Snake'
import { PlayArea } from './js/components/PlayArea/PlayArea'
import { Barrier } from './js/components/configuration/Barrier/Barrier'
import { Counter } from './js/components/configuration/Counter/Counter'
import { Cherry } from './js/components/gameItems/Cherry/Cherry'
import { Pineapple } from './js/components/gameItems/Pineapple/Pineapple'

const game = new Game('#app',{
    menu: {
        value: Sidebar,
        afterPaint: 'show',
        afterLeave: 'hide'
    },
    table: PlayArea,
    game: {
        snake: Snake,
        fruits: [Cherry, Pineapple]
    },
    configuration: [Barrier, Counter]
})

game.render()

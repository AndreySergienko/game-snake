export function createCounterCondition () {
    return `
        <div class="mode mt-30">
                <h2 class="subtitle">Счёт очков</h2>
                <div class="checkbox mode__item">
                    <label>
                        <span>Вкл</span>
                        <input type="checkbox" name="field-counter" id="field-counter" checked>
                        <span class="checkbox__switch"></span>
                        <span>Выкл</span>
                    </label>
                </div>
            </div>
    `
}

export function createCounter () {
    return `<div>Счёт очков: 30</div>`
}

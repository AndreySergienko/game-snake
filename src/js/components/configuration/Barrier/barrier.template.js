export function createBarrierCondition() {
    return `
        <div class="mode">
                <h2 class="subtitle">Режимы</h2>
                <div class="radio mode__item">
                    <div class="radio__form">
                        <input type="radio" id="on-barrier" name="barrier" value="on" checked>
                        <label class="radio__item" for="on-barrier">С припятствиями</label>
                    </div>

                    <div class="radio__form">
                        <input type="radio" id="off-barrier" name="barrier" value="off">
                        <label class="radio__item" for="off-barrier">Без припятствий</label>
                    </div>
                </div>
            </div>
    `
}

export function createBarrier() {}

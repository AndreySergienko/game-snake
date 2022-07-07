export function createSidebarTemplate(sidebarId, configurationId, configurations) {
    const configHtml = createConfiguration(configurations)
    return `
        <div class="sidebar" id="${sidebarId}">
            <h1 class="title">Змейка</h1>

            <div class="configuration" id="${configurationId}">${configHtml}</div>

            <div class="button mt-30">
                <button class="btn btn--start" id="btn-start">Начать игру</button>
            </div>
        </div>
    `
}

function createConfiguration (configurations) {
    let modeHTML = ''
    configurations.forEach((configuration) => {
        modeHTML += configuration.toHTMLCondition()
    })

    return modeHTML
}

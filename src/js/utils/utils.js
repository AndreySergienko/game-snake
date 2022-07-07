export function css(el, styles = {}) {
    Object.keys(styles).forEach(style => {
        el.style[style] = styles[style]
    })
}

export function capitalize(string) {
    if (typeof string !== 'string') {
        return ''
    }

    return string.charAt(0).toUpperCase() + string.slice(1)
}

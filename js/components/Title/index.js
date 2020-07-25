function Title(css, textContent, smallContent, otherText){
    return `
        <h1 style="${css[0]}${css[1]}">
            ${textContent}
            <small>
                ${smallContent}
            </small>
            <em>
                ${otherText}
            </em>
        </h1>`
}
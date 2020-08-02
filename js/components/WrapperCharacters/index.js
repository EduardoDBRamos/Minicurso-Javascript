const pathBulba = 'images/bulba.png'
const bulba = Character`
    width: 25%;
    ${pathBulba}
    
`
const WrapperCharacters = (css, children) => (
    `<div style="${css}">${children}</div>`
)

const wrapperCharacters = WrapperCharacters`
    display:flex;
    justify-content: space-evenly;
    ${bulba + bulba + bulba}
`
const root = document.querySelector('#root')
const textTitle = 'Dificuldade'
const textSmall = 'Text small'
const otherText = 'Outro texto'

// Tagged Template String
const title = Title`
    color: red;
    font-size: 30px;
    ${textTitle}
    ${textSmall}
    ${otherText}
`

root.insertAdjacentHTML('beforeend', title)
const root = document.querySelector('#root')
const textTitle = 'Dificuldade'

// Tagged Template String
const title = Title`
    color: #00b894;
    font-size: 2.5rem;
    letter-spacing: 1.2px;
    ${textTitle}
`
root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
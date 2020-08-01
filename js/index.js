const root = document.querySelector('#root')
const textTitle = 'Dificuldade'

// Tagged Template String
const title = Title`
    color: #00b894;
    font-size: 4rem;
    letter-spacing: 10px;
    margin-bottom: 2rem;
    margin-top: 1rem;
    ${textTitle}
`
root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
root.insertAdjacentHTML('beforeend', slide)
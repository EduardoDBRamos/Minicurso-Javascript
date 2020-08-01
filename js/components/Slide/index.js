const Items= (css, content) => (
    `<li style="${css}">${content}</li>`
)

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const Item = Item`
    
`

const slideContent = "Vai!!"

const slide = Slide `
    width: 80%;
    height: 10px;
    background-color: #ffeaa7;
    margin-top: 3rem;
    ${slideContent}
`

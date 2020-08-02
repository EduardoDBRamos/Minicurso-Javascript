const states = [true, false, false]

function clearAction(action){
    action.classList.remove('second')
    action.classList.remove('third')
}

function handleClick(event) {
    const { target } = event
    const allItems = document.querySelectorAll('.item')
    const action = document.querySelector('.action')

    allItems.forEach(item => item.classList.remove('active') )
    target.classList.add('active')

    clearAction(action)
    if(target.classList.contains('pos-2')){
        action.classList.add('second')
    }

    if(target.classList.contains('pos-3')){
        action.classList.add('third')
    }
}

function showItems(stateItems) {
    const item = (pos) => Item`
        .item {
            list-style: none;
            height: calc(var(--line-height) * 2);
            width: calc(var(--line-height) * 2);
            background-color: var(--color-item);
            transition: transform 100ms linear;
            cursor: pointer;
            border-radius: 50%;
        }
        ${`pos-${pos}`}
    `

    const itemActive = (pos) => Item`
        .item.active {
            transform: scale(1.8)
        }

        ${`active pos-${pos}`}
    `

    const items = stateItems.map((state, index) => {
        index = index+1
        if(state){
            return itemActive(index)
        }

        return item(index)
    })

    return items.join('')
}

function createStyle(css) {
    const head = document.querySelector('head')
    const style = `
        <style>
            ${css}
        </style>
    `

    head.insertAdjacentHTML('beforeend', style)
}

const Action = (css) => {
    createStyle(css)
    
    return (
        `<li class="action"></li>`
    )
}

const Item= (css, className='') => {
    createStyle(css)
    return(`
    <li 
        class="item ${className}"
        onClick="handleClick(event)">
    </li>
    `)
}

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
) 

const action = Action`
    .action {
        list-style: none;
        height: calc(var(--line-height) * 3);
        width: calc(var(--line-height) * 3);
        background-color: var(--action-color);
        position: absolute;
        left: -5px;
        transition: transform 300ms linear;
        border-radius: 50%;
    }

    .action.second{
        transform: translateX(190px);
    }

    .action.third{
        transform: translateX(380px)
    }
`

const slide = Slide `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 80%;
    height: var(--line-height);
    background-color: var(--color-item);
    margin-top: 3rem;
    border-radius: 1%;
    ${showItems(states) + action}
`

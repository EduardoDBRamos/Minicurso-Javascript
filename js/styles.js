const css = `<style>
        *{
            margin: 0;
            padding: 0;
            border: none;
        }

        body{
            background-color: #2c3e50;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        #root{
            box-sizing: border-box;
            font-family: 'Press Start 2P', cursive;
            background-color: #0984e3;
            min-width: 500px;
            width: 40vw;
            height: 65vh;
            text-align: center;
            padding-top: 4rem;
        }
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)
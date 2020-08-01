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
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            font-family: 'Noto Sans JP', sans-serif;
            background-color: #3B3B98;
            min-width: 500px;
            width: 40vw;
            height: 65vh;
            text-align: center;
            padding-top: 1rem;
        }
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)
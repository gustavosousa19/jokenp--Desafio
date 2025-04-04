const result = document.querySelector('.result')
const humanScore = document.getElementById('your-score')
const machineScore = document.getElementById('machine-score')

let hasWon = false

const divPrincipal = document.querySelector('.caixa')
if (!hasWon) {
    divPrincipal.classList.remove('hidden')
}

let humanNumber = 0
let machineNumber = 0


const playHuman = (escolhaDoUsaurio) => {

    playTheGame(escolhaDoUsaurio, playMachine())
}

const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const prizeDraw = Math.floor(Math.random() * 3)

    return choice[prizeDraw]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Deu Empate!'
        result.style.color = 'gray'

    } else if (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper'
    ) {
        humanNumber++
        humanScore.innerHTML = humanNumber
        result.innerHTML = 'Você Ganhou!'
        result.style.color = 'green'

        if (humanNumber === 10){
            humanVictory()
        } 

    } else{
        machineNumber++
        machineScore.innerHTML = machineNumber
        result.innerHTML = 'Você Perdeu pra Alexa!'
        result.style.color = 'red'

        if(machineNumber === 10){
            machineVictory()
        }
    }
}

function humanVictory() {
    hasWon = true

    const divHuman = document.querySelector('.conteiner')
    divHuman.classList.remove('hidden')

    const divPrincipalHuman = document.querySelector('.caixa')
    divPrincipalHuman.classList.add('hidden')
    }

function machineVictory() {
    hasWon = true

    const divMachine = document.querySelector('.conteiner-false')
    divMachine.classList.remove('hidden')

    const divPrincipalMachine = document.querySelector('.caixa')
    divPrincipalMachine.classList.add('hidden')
}


const revanche = () => {
    hasWon = false

    const divPrincipal = document.querySelector('.caixa')
    divPrincipal.classList.remove('hidden')

    const divHuman = document.querySelector('.conteiner')
    divHuman.classList.add('hidden')

    const divMachine = document.querySelector('.conteiner-false')
    divMachine.classList.add('hidden')

    humanNumber = 0
    machineNumber = 0
    humanScore.innerHTML = humanNumber
    machineScore.innerHTML = machineNumber
    result.innerHTML = 'Vamos jogar!'
    result.style.color = 'gray'
}

const reset = () => {
    const buttonReset = document.querySelector('.img-restart')
    
    humanNumber = 0
    machineNumber = 0
    humanScore.innerHTML = humanNumber
    machineScore.innerHTML = machineNumber
    result.innerHTML = 'Vamos jogar!'
    result.style.color = 'gray'

    return buttonReset
}
let player = {
    name: "Jack",
    tokens: 150
}

let cards = []
let sum = 0
let hasBlackyJacky = false
let isAlive = false
let message = ""
instructions = document.getElementById("instructions");
sumEl = document.getElementById("sum-el");
cardEl = document.getElementById("card-el");
playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ' : $' + player.tokens;

function randomcard() {
    let randomNumber = Math.floor(Math.random() * 14) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = randomcard()
    let secondCard = randomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0 ; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "You need to draw a New Card!"
    } else if (sum === 21) {
        message = "You have got Blacky Jacky!!"
        hasBlackyJacky = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    instructions.textContent = message
}

function cardPick() {
    if (isAlive === true && hasBlackyJacky === false) {
        let card = randomcard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
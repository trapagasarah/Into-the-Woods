const categories = ['Oh Deer', 'Bear With Me', 'Hedge the Hog', 'Hey Foxy', 'Get Squirrely', 'Its Getting Harey']
const ohDeer = [
    {
        value: 100,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
]
const bearWithMe = [
    {
        value: 100,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
]
const hedgeTheHog = [
    {
        value: 100,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
]
const heyFoxy = [
    {
        value: 100,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
]
const getSquirrely = [
    {
        value: 100,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
]
const itsGettingHarey = [
    {
        value: 100,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: '.....',
        question: '-----',
        hasBeenSelected: false,
    },
]



let drawCategories = function () {
    let row = $('<div></div>')
    row.addClass('row')
    $('main').append(row)

    for (let i = 0; i < categories.length; i++) {
        let categorySquare = $('<div></div>')
        categorySquare.addClass('game-square')
        categorySquare.addClass('category-square')
        categorySquare.html(categories[i])
        row.append(categorySquare)
    }
}

let drawBoard = function() {
    for (let i = 0; i < 5; i++) {
        let row = $('<div></div>')
        row.addClass('row')
        $('main').append(row)
            let deerSquare = $("<div></div>")
            deerSquare.addClass('game-square')
            deerSquare.html(ohDeer[i].value)
            let bearSquare = $('<div></div>')
            bearSquare.addClass('game-square')
            bearSquare.html(bearWithMe[i].value)
            let hedgehogSquare = $('<div></div>')
            hedgehogSquare.addClass('game-square')
            hedgehogSquare.html(hedgeTheHog[i].value)
            let foxSquare = $('<div></div>')
            foxSquare.addClass('game-square')
            foxSquare.html(heyFoxy[i].value)
            let squirrelSquare = $('<div></div>')
            squirrelSquare.addClass('game-square')
            squirrelSquare.html(getSquirrely[i].value)
            let hareSquare = $('<div></div>')
            hareSquare.addClass('game-square')
            hareSquare.html(itsGettingHarey[i].value)
            row.append(deerSquare)
            row.append(bearSquare)
            row.append(hedgehogSquare)
            row.append(foxSquare)
            row.append(squirrelSquare)
            row.append(hareSquare)
            deerSquare.click(function () {
                selectQuestion()
            })
            bearSquare.click(function () {
                selectQuestion()
            })
            foxSquare.click(function () {
                selectQuestion()
            })
            hedgehogSquare.click(function () {
                selectQuestion()
            })
            squirrelSquare.click(function () {
                selectQuestion()
            })
            hareSquare.click(function () {
                selectQuestion()
            })
        }
       
    }


let selectQuestion = function(){
    console.log('clicked')
}

$(function () {
    drawCategories()
    drawBoard()
})


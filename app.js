let score = 0
let attemptedAnswer
const categories = ['Oh Deer', 'Bear With Me', 'Hedge the Hog', 'Hey Foxy', 'Get Squirrely', 'Its Getting Harey']

const ohDeer = [
    {
        value: 100,
        answer: 'Who is Rudolph',
        question: "The leader of Santa's sley, who has a red nose.",
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: 'Who is Bambi',
        question: 'The Disney character whose mom is shot by a hunter.',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: 'Who is Clarice',
        question: "The love interest of the leader of Santa's sley.",
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: 'Who is Faline',
        question: 'The love interest of the orphaned Disney deer.',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: "The mom of Bambi's love interest",
        question: 'Who is Ena?',
        hasBeenSelected: false,
    },
]
const bearWithMe = [
    {
        value: 100,
        answer: 'Who is Winnie the Pooh',
        question: 'The bear who always gets honey pots stuck on his nose.',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: 'Who is Baloo',
        question: "Mowgli's best friend.",
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: 'Who is Little John',
        question: "Robin Hood's best friend.",
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: 'Who is Paddington',
        question: 'The bear whose home is destroyed by an eathquake and searches for a new one in England.',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: "Who is Mor'du",
        question: 'The name of the main antagoist in the movie Brave.',
        hasBeenSelected: false,
    },
]
const hedgeTheHog = [
    {
        value: 100,
        answer: 'What are hoglets',
        question: 'What baby hedgehoogs are called',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: 'What is array',
        question: 'The nanme of a group of hedgehogs?',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: 'What is sea urchin',
        question: 'The animal named after the hedgehog.',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: 'What is snake venom',
        question: 'What hedgehogs are largely immune to.',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: 'What is self-anointing',
        question: 'The behavior hedgehogs exhibit when exposed to pungent tastes or smells.',
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

let drawBoard = function () {
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
            selectQuestion(ohDeer[i])
            if (ohDeer[i].hasBeenSelected === true) {
                deerSquare.off('click')
            }
            checkIfAnswerIsCorret(ohDeer[i])
        })
        bearSquare.click(function () {
            selectQuestion(bearWithMe[i])
            if (bearWithMe[i].hasBeenSelected === true) {
                bearSquare.off('click')
            }
            checkIfAnswerIsCorret(bearWithMe[i])

        })
        foxSquare.click(function () {
            selectQuestion(heyFoxy[i])
            if (heyFoxy[i].hasBeenSelected === true) {
                foxSquare.off('click')
            }
            checkIfAnswerIsCorret(heyFoxy[i])
        })
        hedgehogSquare.click(function () {
            selectQuestion(hedgeTheHog[i])
            if (hedgeTheHog[i].hasBeenSelected === true) {
                hedgehogSquare.off('click')
            }
            checkIfAnswerIsCorret(hedgeTheHog[i])
        })
        squirrelSquare.click(function () {
            selectQuestion(getSquirrely[i])
            if (getSquirrely[i].hasBeenSelected === true) {
                squirrelSquare.off('click')
            }
            checkIfAnswerIsCorret(getSquirrely[i])
        })
        hareSquare.click(function () {
            selectQuestion(itsGettingHarey[i])
            if (itsGettingHarey[i].hasBeenSelected === true) {
                hareSquare.off('click')
            }
            checkIfAnswerIsCorret(itsGettingHarey[i])
        })
    }

}

let selectQuestion = function (animalSquare) {
    $('.modal  p').html(animalSquare.question)
    $('.modal').show()
    animalSquare.hasBeenSelected = true
}

let checkIfAnswerIsCorret = function (animalSquare) {
    $('button').click(function () {
        let attemptedAnswer = $('.attempted-answer').val()
            .toLowerCase()
            .replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"")

            



        
        if (attemptedAnswer === animalSquare.answer.toLowerCase()){
            score += animalSquare.value
            console.log(score)
        } else {
            score -= animalSquare.value
            console.log(score)
        }
        $('button').off()
        $('.modal').hide()
    })

}


$(function () {
    drawCategories()
    drawBoard()
    

})


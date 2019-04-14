let score = 0
let attemptedAnswer
let numberTurns = 0
let finalJeopardyQuestion = 'The word the owl in Bambi uses to describe falling in love.'
let finalJeopardyAnswer = 'What is Twitterpatted'
const categories = ['Oh Deer', 'Bear With Me', 'Hedge the Hog', 'Hey Foxy', 'Get Squirrely', 'Its Getting Harey']

const ohDeer = [
    {
        value: 100,
        answer: 'What is a herd',
        question: "A group of deer.",
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
        answer: 'What is a Kashmir musk deer',
        question: "The species of deer with vampire-like fangs",
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
        answer: 'What is a slowth',
        question: 'A group of bears.',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: "What is pepper vodka",
        question: 'The beverage the governor of Moscow taught a bear to serve.',
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
        answer: 'What is an array',
        question: 'The nanme of a group of hedgehogs?',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: 'What is a sea urchin',
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
        answer: 'What is a red fox',
        question: 'The most common fox species.',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: 'what is a vixen',
        question: 'A female fox',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: 'What is a kit',
        question: 'A baby fox',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: 'Who is Tod',
        question: 'The name of the fox in The Fox and the Hound.',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: 'What is a skulk',
        question: 'A group of foxes.',
        hasBeenSelected: false,
    }
]
const getSquirrely = [
    {
        value: 100,
        answer: 'What is a dray',
        question: 'A family of squirrels.',
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: 'What is a scurry',
        question: 'A group of squirrels.',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: 'What are front teeth',
        question: 'The part of a squirrel that never stops growing.',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: 'What is Iran',
        question: 'The country that claimed 14 squirrels found near its boarder were spies.',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: 'What is shadow tail',
        question: 'The meaning of squirrel in Greek',
        hasBeenSelected: false,
    },
]
const itsGettingHarey = [
    {
        value: 100,
        answer: 'Who is Thumper',
        question: "Bambi's best friend",
        hasBeenSelected: false,
    },
    {
        value: 200,
        answer: 'What is a Jack',
        question: 'A male hare.',
        hasBeenSelected: false,
    },
    {
        value: 300,
        answer: 'What is a Jill',
        question: 'A female hare.',
        hasBeenSelected: false,
    },
    {
        value: 400,
        answer: 'What is a drove',
        question: 'A group of hares.',
        hasBeenSelected: false,
    },
    {
        value: 500,
        answer: 'What is a leveret',
        question: 'A baby hare',
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
            deerSquare.html('')
            deerSquare.css('background', 'rgba(175,113,80, .5)')
        })
        bearSquare.click(function () {
            selectQuestion(bearWithMe[i])
            if (bearWithMe[i].hasBeenSelected === true) {
                bearSquare.off('click')
            }
            checkIfAnswerIsCorret(bearWithMe[i])
            bearSquare.html('')
            bearSquare.css('background', 'rgba(175,113,80, .5)')
        })
        foxSquare.click(function () {
            selectQuestion(heyFoxy[i])
            if (heyFoxy[i].hasBeenSelected === true) {
                foxSquare.off('click')
            }
            checkIfAnswerIsCorret(heyFoxy[i])
            foxSquare.html('')
            foxSquare.css('background', 'rgba(175,113,80, .5)')
        })
        hedgehogSquare.click(function () {
            selectQuestion(hedgeTheHog[i])
            if (hedgeTheHog[i].hasBeenSelected === true) {
                hedgehogSquare.off('click')
            }
            checkIfAnswerIsCorret(hedgeTheHog[i])
            hedgehogSquare.html('')
            hedgehogSquare.css('background', 'rgba(175,113,80, .5)')
        })
        squirrelSquare.click(function () {
            selectQuestion(getSquirrely[i])
            if (getSquirrely[i].hasBeenSelected === true) {
                squirrelSquare.off('click')
            }
            checkIfAnswerIsCorret(getSquirrely[i])
            squirrelSquare.html('')
            squirrelSquare.css('background', 'rgba(175,113,80, .5)')
        })
        hareSquare.click(function () {
            selectQuestion(itsGettingHarey[i])
            if (itsGettingHarey[i].hasBeenSelected === true) {
                hareSquare.off('click')
            }
            checkIfAnswerIsCorret(itsGettingHarey[i])
            hareSquare.html('')
            hareSquare.css('background', 'rgba(175,113,80, .5)')
        })
    }

}

let selectQuestion = function (animalSquare) {
    $('#question-modal p').html(animalSquare.question)
    $('#question-modal').show()
    animalSquare.hasBeenSelected = true

}

let checkIfAnswerIsCorret = function (animalSquare) {
    $('.submit').click(function (event) {
        event.preventDefault()
        let attemptedAnswer = $('.attempted-answer').val()
            .toLowerCase()
            .replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, "")
        if (attemptedAnswer === animalSquare.answer.toLowerCase()) {
            score += animalSquare.value
            $('#correct-incorrect-modal h2').html('Correct!')
            $('#correct-incorrect-modal p').html('')
        } else {
            score -= animalSquare.value
            $('#correct-incorrect-modal h2').html('Incorrect')
            $('#correct-incorrect-modal p').html('We were looking for... ' + animalSquare.answer + '?')
        }
        $('#correct-incorrect-modal').show()
        $('.submit').off()
        $('#question-modal').hide()
        $('.score').html('Score: ' + score)
        $('.attempted-answer').val('')
        numberTurns++


    })

}


$(function () {
    drawCategories()
    drawBoard()
    $('.close').click(function () {
        $('#correct-incorrect-modal').hide()
        if (numberTurns === 30 && score > 0) {
            $('#final-jeopardy-bet-modal').show()
        }else if(numberTurns === 30){
        $('main').html('')
    }
    })
    $('.bet-submit').click(function (event) {
        event.preventDefault()
        let bet = $('.bet').val()
        $('#final-jeopardy-question-modal').show()
        $('#final-jeopardy-question-modal p').html(finalJeopardyQuestion)
        $('.answer-submit').click(function (event) {
            event.preventDefault()
            let submittedAnswer = $('.answer').val()
                .toLowerCase()
                .replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, "")
                console.log(submittedAnswer)
            if (submittedAnswer === finalJeopardyAnswer.toLowerCase()) {
                score += Number(bet)
            } else {
                score -= Number(bet)
            }
            $('.modal').hide()
            $('.score').html('Score: ' + score)
            $('main').html('')
            
        })



    })
})

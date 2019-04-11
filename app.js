const categories = ['Oh Deer', 'Bear With Me', 'Hedge the Hog', 'Hey Foxy', 'Get Squirrely','All Bark and No Bite']
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
const  allBarkAndNoBite = [
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



let drawCategories = function() {
    let row = $('<div></div>')
    row.addClass('row')
    $('main').append(row)
    
    for (let i = 0; i < categories.length; i++) {
        let categorySquare = $('<div></div>')
        categorySquare.addClass('category-square')
        categorySquare.html(categories[i])
        row.append(categorySquare)
    }
}


$(function(){
    drawCategories()
})
const triviaQuestions = document.getElementById('questions-container')
const triviaAnswers = document.getElementByClass('button')



const questions = [
    {
        question: 'What year was the original Star Wars movie released?',
        
        answers: [
            '1979',
            '1984',
            '1977',
            '1981'
        ],

        correctAnswer: 2
    }
]

function displayQuestion(question){
    triviaQuestions.innerText = question
}

displayQuestion(question)

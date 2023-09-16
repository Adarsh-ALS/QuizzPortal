var quizdata = [

    {
        question : 'Which Framework belong to JavaScript?',
        a        :  '.net',
        b        :  'flask',
        c        :  'react',
        d        :  'django',
        correct  :   'c'
    },

    {
        question : 'Which is not a programming language?',
        a        :  'html',
        b        :  'python',
        c        :  'java',
        d        :  'javascript',
        correct  :   'a'
    },

    {
        question : 'Which is not a Framework?',
        a        :  'react',
        b        :  'javascript',
        c        :  'angular',
        d        :  'django',
        correct  :   'b'
    },

    {
        question : 'CSS stands for?',
        a        :  'cascading style state',
        b        :  'cascading style sheet',
        c        :  'cascading sheet of style',
        d        :  'none',
        correct  :   'b'
    }

]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currQuet = 0
var quizScore = 0

loadQuiz()

function loadQuiz()
{
    deselect()

    question.innerHTML = quizdata[currQuet].question
    option_a.innerHTML = quizdata[currQuet].a
    option_b.innerHTML = quizdata[currQuet].b
    option_c.innerHTML = quizdata[currQuet].c
    option_d.innerHTML = quizdata[currQuet].d
}

function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click', ()=>{

    var selectadoption;

    answer.forEach(answer=>{

        if(answer.checked)
        {
            selectadoption = answer.id
        }
    })

    if(selectadoption == quizdata[currQuet].correct)
    {
        quizScore = quizScore+1
    }

    currQuet = currQuet+1

    if(currQuet == quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizScore} correctly out of ${quizdata.length}`
    }
    else
    {
        loadQuiz()
    }

})
const questions = [
    {
        'ques': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'ques': 'In which year was JavaScript launched?',
        'a': '1995',
        'b': '1996',
        'c': '1994',
        'd': '1997',
        'correct': 'a'
    },
    {
        'ques': 'What does CSS stand for?',
        'a': 'Cascading Style Sheets',
        'b': 'Computer Style Sheets',
        'c': 'Creative Style Sheets',
        'd': 'Colorful Style Sheets',
        'correct': 'a'
    },
    {
        'ques': 'What does HTML stand for?',
        'a': 'HyperText Markup Language',
        'b': 'HyperText Machine Language',
        'c': 'Hyper Transfer Markup Language',
        'd': 'HyperLink and Text Markup Language',
        'correct': 'a'
    },
    {
        'ques': 'What does HTTP stand for?',
        'a': 'HyperText Transfer Protocol',
        'b': 'HyperText Transfer Practice',
        'c': 'HyperText Textual Protocol',
        'd': 'HyperText Transmission Protocol',
        'correct': 'a'
    }
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];

    queBox.innerText = `${index + 1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = questions[index];  // Add this line to define 'data'
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInputs.forEach(
        input => {
            input.checked = false;
        }
    );
};

const endQuiz = () => {
    document.getElementById('queBox').innerHTML = `
        <h3>Thank you for playing the quiz!</h3>
        <h2>${right} / ${total} are correct</h2>`;
};

loadQuestion();

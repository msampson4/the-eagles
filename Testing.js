const mylist =[];
testlist(mylist)
function testlist(list)
    {
    if(list_length === 0)
    {
        console.log("The list is Empty.");
    }
    if (list_length > 0)
    {
        console.log("The list has more than 1 available games.");
    }
}
const mystart =[]
TestStart(mystart)
function TestStart(start) {
    if (start.state !== "Start") {
        console.log("The specified treasure hunt is not active right now.")
    }
    if (start.question !== "empty") {
        console.log("The specified treasure hunt is empty")
    }
    if (start.player !== 0) {
        console.log("The specified playerName:Homer, is already in use")
    }
}
const myvalue =[]
TestValue(myvalue)
function TestValue(value) {
    return value === undefined,  value === null,  value === '';
}
const myid =[]
TestId(myid)
function TestId(id)
{
    var id = document.getElementById('red');
    if(id)
    {
        alert("id exists!");
    }
    else
    {
        alert("id doesn't exist");
    }
const myparameter =[]
TestParameter(myparameter)
    function TestParameter(parameter)
    {
        parameter = parameter != null ? parameter : "default";
        console.log('Multiple error messages of the form', 'Missing or empty parameter');
    }
    return parameter;
}


const myanswers =[]
TestAnswers(myanswers)
function TestAnswers(corectAnswers , userAnswers) {
    let numCorrect = 0;

    userAnswers.forEach((answer, i) => {
        if (answer == correctAnswers[i]) {
            numCorrect++;
        }
    });
    return numCorrect;
}
const questions = [];

function selectQuestion() {
    const index = Math.floor(Math.random() * questions.length);
    return questions[index];
}
function testQuestions() {
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        console.log('Question ${i+1}: ${question.question}');
        console.log('Answer: ${question.answer}');
        const playerAnswer = prompt("Enter your answer:");
        if (playerAnswer.toLowerCase() === question.answer.toLowerCase()) {
            console.log("Correct!");
        } else {
            console.log("Incorrect. Try again.");
            i--; // decrement i so that the same question is asked again
        }
    }
}
testQuestions();









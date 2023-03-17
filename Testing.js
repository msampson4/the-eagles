const mylist =['Hello' , 'Avatar' , 'Basketball'];
testlist(mylist)
function testlist(list)
    {
    if(list_length == 0)
    {
        console.log("The list is Empty.");
    }
    if (list_length > 0)
    {
        console.log("The list has more than 1 available games.");
    }
}
const
function testGameStart(game)
    {
    if (game.state !== "Start")
    {
        console.log("The specified treasure hunt is not active right now.")
    }
    if (game.question !== "empty")
    {
        console.log("The specified treasure hunt is empty")
    }
    if (game.player !== 0)
    {
        console.log("The specified playerName:Homer, is already in use")
    }
}
function testAnswers(useranswers , corectanswers){
    let numCorrect = 0;

    userAnswers.forEach((answer, i)=> {
        if (answer == correctAnswers[i]){
            numCorrect++;
        }
});
return numCorrect;
}







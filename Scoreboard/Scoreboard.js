const nameTextElement = document.getElementById("nameText");
const scoreFieldElement = document.getElementById("scoreField");
getname();
function getname() {

    const URL ="https://codecyprus.org/th/api/name?session=" + localStorage.getItem("session-id");
    fetch(URL)
        .then(response => response.json())
        .then(jsonObject => {
            if (jsonObject.status === "OK") {
                const nameText = jsonObject.nameText;
                nameTextElement.innerHTML = nameText;
            } else {
                alert(jsonObject.errorMessages[0]);
            }
        });


}
getScore();
function getScore(){

    const URL ="https://codecyprus.org/th/api/score?session=" + localStorage.getItem("session-id");
    fetch(URL)
        .then(response => response.json())
        .then(jsonObject => {
            if (jsonObject.status === "OK") {
                const scoreField = jsonObject.scoreField;
                scoreFieldElement.innerHTML = scoreField;
            } else {
                alert(jsonObject.errorMessages[0]);
            }
        });

}
function calculateRank(score, maxScore, time, totalTime) {
    // Calculate the percentage of the total score
    let percentage = (score / maxScore) * 100;

    // Calculate the percentage of the total time
    let timePercentage = ((totalTime - time) / totalTime) * 100;

    // Combine the two percentages to calculate the final rank
    let rank = (percentage + timePercentage) / 2;

    // Round the rank to two decimal places
    rank = rank.toFixed(2);

    return rank;
}








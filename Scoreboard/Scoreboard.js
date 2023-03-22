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
getscore();
function getscore(){

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







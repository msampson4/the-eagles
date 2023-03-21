const URL = "https://codecyprus.org/th/api/list";
fetch(URL)
    .then(response => response.blob())
    .then(data => {
        console.log(data);
        // Do something with the data
    })
    .catch(error => console.error(error));

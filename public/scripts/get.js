function get(url) {
    //Step1: fetch data
    return fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "61745be2d2msh8d44bac48ed1f66p10f08ejsn073b645c92f1"
        }
    })
        //Step2: Run the json() method from the server response
        .then(function(response) {
            return response.json();
        })
        //Step3: Return the data from the response.json() method
        .then(function(data) {
        return data;
        })
}

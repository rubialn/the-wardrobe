const weatherMessage = document.getElementById("weather-message"); //finds the element by the id weather-message which is the <p> with id weather-message in the html file
weatherMessage.textContent = "The Weather form is ready."; //displays the message inside the status paragraph

const weatherForm = document.getElementById("weather-form"); //finds the form
const cityInput = document.getElementById("city"); //find the city input

weatherForm.addEventListener("submit", function (event) { //waits the form to be submited
    event.preventDefault(); //prevents the defalt form submission from reloading the page

    const cityName = cityInput.value.trim(); //removes spaces from the start and the end of the text

    if (cityName === "") { //rejects and empty input or an imput containing only spaces
        weatherMessage.textContent = "Please enter a city name";
        return; //exits the function in this situation
    }

    weatherMessage.textContent = "You entered: " + cityName; //displays a message with the name of the city that the user submited
});
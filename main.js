
const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const rankineInput = document.getElementById("rankine");
const backgroundImage = document.getElementById("background-image");
const element1 = document.getElementById("p1");
const element2 = document.getElementById("p2");
const element3 = document.getElementById("p3");
const element4 = document.getElementById("p4");
const statement = document.getElementById("statement");

const inputs = document.getElementsByClassName("input");

    for(let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
       
    input.addEventListener("input", function(event) {
        let value = parseFloat(event.target.value);
        switch(event.target.name) {
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                rankineInput.value = (value + 273.15) * 1.8;
                if (value <= -273.15) {
                    element1.innerHTML = "That is below absolute zero.";
                }else if (value > -273.15 && value < 10) {
                    backgroundImage.style.backgroundImage = "url('/assests/winter.jpg')";
                    statement.innerHTML = "Grab your Coat!";
                } else if (value > 10 && value < 26.666666666666664) {
                    backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')";
                    statement.innerHTML = "Let's play outside!";   
                } else {
                    backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')";
                    statement.innerHTML = "The glaciers are melting!";    
                }
                break;
            case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                rankineInput.value = value + 459.67;
                if (value <= -459.67) {
                    element2.innerHTML = "That is below absolute zero.";
                } else if (value <= 50) {
                    backgroundImage.style.backgroundImage = "url('/assests/winter.jpg')";
                    statement.innerHTML = "Grab your Coat!";    
                } else if (value > 50 && value < 80) {
                    backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')";
                    statement.innerHTML = "Let's play outside!"; 
                } else {
                    backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')";
                    statement.innerHTML = "The glaciers are melting!";
                }
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                rankineInput.value = value * 1.8;
                if (value <= 0) {
                    element3.innerHTML = "That is below absolute zero.";
                } else if (value <= 283.15) {
                    backgroundImage.style.backgroundImage = "url('/assests/winter.jpg')";
                    statement.innerHTML = "Grab your Coat!";   
                } else if (value > 283.15 && value < 299.81666666666666) {
                    backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')";
                    statement.innerHTML = "Let's play outside!";  
                } else {
                    backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')";
                    statement.innerHTML = "The glaciers are melting!"; 
                }
                break;
            case "rankine":
                celciusInput.value = (value - 491.67) / 1.8;
                fahrenheitInput.value = value - 459.67;
                kelvinInput.value = celciusInput.value + 273.15;
                if (value <= 0) {
                    element4.innerHTML = "That is below absolute zero.";
                } else if (value <= 509.67) {
                    backgroundImage.style.backgroundImage = "url('/assests/winter.jpg')";
                    statement.innerHTML = "Grab your Coat!";   
                } else if (value > 509.67 && value < 539.67 ) {
                    backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')";
                    statement.innerHTML = "Let's play outside!";  
                } else {
                    backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')";
                    statement.innerHTML = "The glaciers are melting!"; 
                }
                break;
        }
    });
}
   
function clearFields() {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celcius").value = "";
    document.getElementById("kelvin").value = "";
    document.getElementById("rankine").value = "";
    element1.innerHTML = "";
    element2.innerHTML = "";
    element3.innerHTML = "";
    element4.innerHTML = "";
    statement.innerHTML = "It's How Hot?"
    backgroundImage.style.backgroundImage = "url('/assests/thermometer.jpg')";
   
}

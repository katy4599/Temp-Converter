
const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");
const background = document.getElementById("background-image");

const inputs = document.getElementsByClassName("input");



    inputs.addEventListener("input", function(event) {
        let value = parseFloat(event.target.value);
        if (event.target.name == "celcius") {
            if (value <= 10) {
                background.style.backgroundImage = "url('/assests/winter.jpg')";
            }  else if (value > 10 && value < 26.666666666666664) {
                backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')";   
            } else {
                backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')";    
            }
            fahrenheit.value = (value * 1.8) + 32;
            kelvin.value = value + 273.15;
        } else if (event.target.name == "fahrenheit") {
            if (value <= 50) {
                background.style.backgroundImage = "url('/assests/winter.jpg')";    
            } else if (value > 50 && value < 80) {
                backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')"; 
            } else {
                backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')";
            }
            celcius.value = (value - 32) / 1.8;
            kelvin.value = ((value - 32) / 1.8) + 273.15;
        } else {
            if (value <= 283.15) {
                background.style.backgroundImage = "url('/assests/winter.jpg')";   
            } else if (value > 283.15 && value < 299.81666666666666) {
                backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')";  
            } else {
                backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')"; 
            }
            celcius.value = value - 273.15;
            fahrenheit.value = ((value - 273.15) * 1.8) + 32;
        }
    });


// function renderImage(value) {
//     const background = document.getElementById("background-image");
    
//     if (fahrenheit >= 80) {
//             background.style.backgroundImage = "url('/assests/sunnyearth.jpg')";
//     } else if (fahrenheit < 80 && fahrenheitInput >= 50) {
//             background.style.backgroundImage = "url('/assests/niceweather.jpg')";
//     } else if (fahrenheit < 50) {
//             background.style.backgroundImage = "url('/assests/winter.jpg')";
//     } else {
//             background.style.backgroundImage = "url('/assests/thermometer.jpg')";
//     }
// }
    
    
function clearFields() {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celcius").value = "";
    document.getElementById("kelvin").value = "";
};

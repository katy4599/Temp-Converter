
const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const backgroundImage = document.getElementById("background-image");

const inputs = document.getElementsByClassName("input");

for(let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function(event) {
        let value = parseFloat(event.target.value);
        switch(event.target.name) {
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                if (value < 10) {
                    backgroundImage.style.backgroundImage = "url('/assests/winter.jpg')";
                } else if (value > 10 && value < 26.666666666666664) {
                    backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')";   
                } else {
                    backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')";    
                }
                break;
            case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                if (value <= 50) {
                    backgroundImage.style.backgroundImage = "url('/assests/winter.jpg')";    
                } else if (value > 50 && value < 80) {
                    backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')"; 
                } else {
                    backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')";
                }
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                if (value <= 283.15) {
                    backgroundImage.style.backgroundImage = "url('/assests/winter.jpg')";   
                } else if (value > 283.15 && value < 299.81666666666666) {
                    backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')";  
                } else {
                    backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')"; 
                }
                break;
        }
    });
}

// function renderImage(value) {
//     const backgroundImage = document.getElementById("background-image");
    
//     if (fahrenheitInput >= 80) {
//             backgroundImage.style.backgroundImage = "url('/assests/sunnyearth.jpg')";
//     } else if (fahrenheitInput < 80 && fahrenheitInput >= 50) {
//             backgroundImage.style.backgroundImage = "url('/assests/niceweather.jpg')";
//     } else if (fahrenheitInput < 50) {
//             backgroundImage.style.backgroundImage = "url('/assests/winter.jpg')";
//     } else {
//             backgroundImage.style.backgroundImage = "url('/assests/thermometer.jpg')";
//     }
// }
    
    
function clearFields() {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celcius").value = "";
    document.getElementById("kelvin").value = "";
    backgroundImage.style.backgroundImage = "url('/assests/thermometer.jpg')";
   
}

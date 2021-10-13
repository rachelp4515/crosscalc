const gsInput = document.querySelector('#gsInput');
const elevInput = document.querySelector('#elevInput');
const pivDisplay = document.querySelector('#pivDisplay');
const windSpeed = document.querySelector('#windSpeed');
const windDirection = document.querySelector('#windDirection');
const runway = document.querySelector('#runway');
const crossOutput = document.querySelector('#cross');
const headOutput = document.querySelector('#head');
const allElements = document.querySelector('#all-sections');

allElements.addEventListener('input', displayThings);


function pivCalc(gsInput, elevInput){
    gsInput = parseFloat(gsInput);
    elevInput = parseFloat(elevInput);
    pivAlt = ((gsInput * gsInput) / 15) + elevInput;
    return parseInt(pivAlt);
}
function crossCalc(windspeed, winddirection, runway){
    winds = winddirection - runway;
    wind = (winds * Math.PI)/ 180;
    cross = windspeed * Math.sin(wind);
    return cross.toFixed(2);
}
function headCalc(windspeed, winddirection, runway){
    winds = winddirection - runway;
    wind = (winds * Math.PI)/ 180;
    head = windspeed * (Math.cos(wind));
    return head.toFixed(2);
}

function displayThings(){
    pivDisplay.innerHTML = pivCalc(gsInput.value, elevInput.value);   
    crossOutput.innerHTML = crossCalc(windSpeed.value, windDirection.value, runway.value);
    headOutput.innerHTML = headCalc(windSpeed.value, windDirection.value, runway.value);
}



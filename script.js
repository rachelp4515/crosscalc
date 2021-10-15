const gsInput = document.querySelector('#gsInput');
const elevInput = document.querySelector('#elevInput');
const pivDisplay = document.querySelector('.pivDisplay');
const windSpeed = document.querySelector('#windSpeed');
const windDirection = document.querySelector('#windDirection');
const runway = document.querySelector('#runway');
const crossOutput = document.querySelector('.cross');
const headOutput = document.querySelector('.head');
const allElements = document.querySelector('.all-sections');
const crosshead = document.querySelector('.crossheader')
const select = document.querySelector('.select')


allElements.addEventListener('input', displayThings);


function pivCalc(gsInput, elevInput, select){
    if (select == 'knots'){
        gsInput = parseFloat(gsInput);
        elevInput = parseFloat(elevInput);
        pivAlt = ((gsInput * gsInput) / 15) + elevInput;
        return parseInt(pivAlt);
    }
    else{
        gsInput = parseFloat(gsInput);
        elevInput = parseFloat(elevInput);
        pivAlt = ((gsInput * gsInput) / 11.3) + elevInput;
        return parseInt(pivAlt);
    }
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
    pivDisplay.innerHTML = pivCalc(gsInput.value, elevInput.value, select.value);   
    crossOutput.innerHTML = `${crossCalc(windSpeed.value, windDirection.value, runway.value)} knots`
    CH = parseFloat(headCalc(windSpeed.value, windDirection.value, runway.value))
    if (CH < 0){
        headOutput.innerHTML = `${headCalc(windSpeed.value, windDirection.value, runway.value) * -1} knots`
        crosshead.innerHTML = 'Tailwind'
    }
    else{
        headOutput.innerHTML = `${headCalc(windSpeed.value, windDirection.value, runway.value)} knots`
        crosshead.innerHTML = 'Headwind'
    }
}
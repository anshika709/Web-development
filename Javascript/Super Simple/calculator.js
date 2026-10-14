// Initialize state using fallback conditions
let calculation = localStorage.getItem('calculation') || '';

// Display storage memory states immediately upon initial page startup render
displayCalculation();

function updateCalculation(value) {
    calculation += value;
    displayCalculation(); 
    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.js-calculation').innerHTML = calculation;
}

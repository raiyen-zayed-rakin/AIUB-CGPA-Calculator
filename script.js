

// Function to toggle between light and dark theme by switching class on <body>
function toggleTheme() {
    const bodyElement = document.body;
    bodyElement.classList.toggle('light-theme');
    bodyElement.classList.toggle('dark-theme');
}

// CGPA calculation function
function calculateCGPA() {
    const gradePoints = {
        "gradeAPlus": 4.00,
        "gradeAMinus": 3.75,
        "gradeBPlus": 3.50,
        "gradeBMinus": 3.25,
        "gradeCPlus": 3.00,
        "gradeCMinus": 2.75,
        "gradeDPlus": 2.50,
        "gradeD": 2.25,
        "gradeF": 0.00,
    };

    let totalCredits = 0;
    let totalPoints = 0;

    for (let grade in gradePoints) {
        const occurrences = parseFloat(document.getElementById(grade).value) || 0;
        const credits = parseFloat(document.getElementById(`${grade}Credits`).value) || 0;
        
        if (!validateInput(occurrences) || !validateInput(gradeCredits)) {
            totalPoints += credits * gradePoints[grade]; // Total points = occurrences * credits * grade points
            totalCredits += credits; // Total credits
        }
    }
    const cgpa = totalCredits > 0 ? (totalPoints / totalCredits) : 0.00;
    document.getElementById('cgpaResult').innerText = cgpa.toFixed(2);
    document.getElementById('totalCredit').innerText = totalCredits;

    const resultElement = document.getElementById("cgpaResult");
    if (cgpa >= 3.5) {
        resultElement.style.color = "greenyellow";
    } else if (cgpa >= 2.0) {
        resultElement.style.color = "orange";
    } else {
        resultElement.style.color = "red";
    }
    // Reset input fields after calculation
    //resetInputFields();
}

function validateInput(value) {
    if (value < 0) {
        alert("Values cannot be negative.");
        resetInputFields();
        return true;
    }
    return false;
}

// Function to reset all input fields
function resetInputFields() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.value = ''; // Clear the input field
    });
    
    document.getElementById('cgpaResult').innerText = '0.00';
    document.getElementById('cgpaResult').style.color = "white";
    document.getElementById('totalCredit').innerText = 0;
}

function showInfo() {
    const label = document.getElementById("info");
    if (label.style.display === 'none') {
        label.style.display = 'block'; // Show the label
    } else {
        label.style.display = 'none';  // Hide the label
    }
}
// Optional real-time calculation
// document.querySelectorAll('input').forEach(input => {
//     input.addEventListener('input', calculateCGPA);
// });
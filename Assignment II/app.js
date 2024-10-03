// DOM elements
const form = document.getElementById('userForm');
const resultsContainer = document.getElementById('resultsContainer');
const heading = document.getElementById('mainHeading');
const submitButton = document.getElementById('submitButton');

// Function to validate form fields
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }
    if (age < 18 || age > 100) {
        alert("Age must be between 18 and 100.");
        return false;
    }
    return true;
}

// Form submission handler
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!validateForm()) return;

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const country = document.getElementById('country').value;
    const comments = document.getElementById('comments').value;

    // Get selected fruits
    const selectedFruits = [];
    document.querySelectorAll('input[name="fruit"]:checked').forEach(fruit => {
        selectedFruits.push(fruit.value);
    });

    // Display the results
    resultsContainer.innerHTML = `
        <h3>Submission Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Favorite Fruits:</strong> ${selectedFruits.join(', ')}</p>
        <p><strong>Comments:</strong> ${comments || 'None'}</p>
    `;

    // Change background color
    resultsContainer.style.backgroundColor = "#d4edda";
});

// Change button text on click
submitButton.addEventListener('click', function () {
    submitButton.textContent = "Submitting...";
    setInterval(() => {
        submitButton.textContent = "Submitted!";
    }, 5000);
});

// Mouseover event for heading
heading.addEventListener('mouseover', function () {
    heading.classList.add('highlight');
});

heading.addEventListener('mouseout', function () {
    heading.classList.remove('highlight');
});

// Reset the form and results section
document.getElementById('resetButton').addEventListener('click', function () {
    resultsContainer.innerHTML = '';
    resultsContainer.style.backgroundColor = "#f9f9f9";
    submitButton.textContent = "Submit";
});

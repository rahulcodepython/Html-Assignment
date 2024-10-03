// Part 1: Basic Selectors

// Change the text of the headerTitle
document.getElementById('headerTitle').textContent = "JavaScript DOM Manipulation";

// Change the text color of all p elements with the class description to blue
let descriptions = document.getElementsByClassName('description');
for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].style.color = "blue";
}

// Change the font style of all div elements to italic
let divElements = document.getElementsByTagName('div');
for (let i = 0; i < divElements.length; i++) {
    divElements[i].style.fontStyle = "italic";
}

// Add the class highlight to the first paragraph element found on the page
document.querySelector('p').classList.add('highlight');

// Change the background color of all buttons to green
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.backgroundColor = "green";
});

// Part 2: Getter and Setter Values

// Handle the click event for the submit button
document.getElementById('submitButton').addEventListener('click', function () {
    // Get the value from the input field
    const username = document.getElementById('usernameInput').value;

    // Display the username in the outputArea paragraph  
    document.getElementById('outputArea').textContent = `Hello, ${username}!`;

    // Clear the input field
    document.getElementById('usernameInput').value = '';
});

// Part 3: Handling Attributes

// Retrieve and display the href attribute from the myLink element
let linkHref = document.getElementById('myLink').getAttribute('href');
document.getElementById('outputArea').textContent += ` The link href is: ${linkHref}.`;

// Change the href of myLink to "https://www.example.com" and update its text
document.getElementById('myLink').setAttribute('href', 'https://www.example.com');
document.getElementById('myLink').textContent = 'Go to Example';

// Remove the href attribute and update the output area
document.getElementById('myLink').removeAttribute('href');
document.getElementById('outputArea').textContent += " Link is now disabled.";

// Check if the href attribute exists after it's been removed
let hasHref = document.getElementById('myLink').hasAttribute('href');
if (!hasHref) {
    document.getElementById('outputArea').textContent += " The link is no longer active.";
}

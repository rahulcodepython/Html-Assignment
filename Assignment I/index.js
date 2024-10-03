// app.js

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const error = document.getElementById('errorMessage');
    const summaryDiv = document.getElementById('summary');
    error.textContent = '';
    summaryDiv.textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const country = document.getElementById('country').value;
    const subscribe = document.getElementById('subscribe').checked;
    const comments = document.getElementById('comments').value.trim();

    try {
        // Validation
        if (name.length < 3 || name.length > 20) {
            throw new Error("Name must be between 3 and 20 characters.");
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid email format.");
        }

        if (age < 18 || age > 100) {
            throw new Error("Age must be between 18 and 100.");
        }

        // Display the summary
        let summaryHTML = `<p>Thank you, <strong>${name}</strong>! We've received your details.</p>`;
        summaryHTML += `<p>Gender: ${gender}</p>`;
        summaryHTML += `<p>Country: <strong>${country}</strong></p>`;
        if (comments) {
            summaryHTML += `<p>Comments: ${comments}</p>`;
        }

        if (subscribe) {
            summaryHTML += `<p>You've subscribed to our newsletter!</p>`;
        }

        summaryDiv.innerHTML = summaryHTML;

    } catch (error) {
        error.textContent = error.message;
    }
});

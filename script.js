// Handle Signup form submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload on submit

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert('All fields are required!');
        return;
    }

    alert('Signup successful!'); // Placeholder for further functionality
});

// Redirect to Login page when the login button is clicked
document.getElementById('login-btn').addEventListener('click', function () {
    // Redirect to login.html (you'll create this in the next step)
    window.location.href = 'login.html';
});

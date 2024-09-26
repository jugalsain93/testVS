document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = { name, email, password };

    try {
        const response = await fetch('https://example.com/api/register', { // Replace with your API URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        document.getElementById('responseMessage').textContent = 'Registration successful!';

    } catch (error) {
        document.getElementById('responseMessage').textContent = 'Registration failed: ' + error.message;
    }
});

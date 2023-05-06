const form = document.querySelector('form');
const username = document.getElementById('set-username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const newUser = {
        username: username.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Failed to create user.');
        }

        const responseData = await response.json();

        console.log(responseData);
        window.location.replace('/'); // Redirect to homepage after successful sign-up

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});

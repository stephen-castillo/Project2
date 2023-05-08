const loginFormHandler = async (event) => {
    event.preventDefault();
    //  console.log('I am running');
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        //console.log('I posted');

        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to log in'); //reminder to replace this with modal instead of using alert
        }
    }
};

    document
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler);
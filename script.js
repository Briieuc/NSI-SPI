document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'Monsieur' && password === '1234') {
        errorMessage.textContent = '';
        window.location.href = 'success.html';
    } else {
        errorMessage.textContent = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
});
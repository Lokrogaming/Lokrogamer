document.addEventListener('DOMContentLoaded', () => {
    const captchaLabel = document.getElementById('captchaLabel');
    const captchaInput = document.getElementById('captchaInput');
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    const username = "Admin";
    const password = "test123";

    // Generate a random captcha
    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        captchaLabel.textContent = `Was ist ${num1} + ${num2}?`;
        return num1 + num2;
    }

    let captchaResult = generateCaptcha();

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;
        const enteredCaptcha = parseInt(captchaInput.value, 10);

        if (enteredUsername === username && enteredPassword === password && enteredCaptcha === captchaResult) {
            // Redirect to the specified page
            window.location.href = "downloader.html";
        } else {
            message.textContent = "Ungültige Anmeldedaten oder falsches Captcha.";
            captchaResult = generateCaptcha(); // Reset captcha
            captchaInput.value = "";
        }
    });
});

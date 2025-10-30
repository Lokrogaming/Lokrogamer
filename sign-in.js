document.addEventListener('DOMContentLoaded', async () => {
  const captchaLabel = document.getElementById('captchaLabel');
  const captchaInput = document.getElementById('captchaInput');
  const loginForm = document.getElementById('loginForm');
  const message = document.getElementById('message');

  const pw = "k6GH2NPdA4vgTP7v";
  const pw2 = "k6GH2NPdA4vgTP7v";
  const u896_475 = "cPZbNprFmmx9U2hXZn7cpOZnZHBEyW5kubLM4wsOipqESnHqpYjuAAIYbnoqTMVv8Q==";
  const p567_132 = "Y6dvEr/dYf/5CaxgVgwBt9WkcGiOp3KyGWPh8KcVleB8Tcm24k+f5AYMblsaqFuH";

  // 🔹 await funktioniert jetzt!
  const username = await window.cryptingDecoder.decrypt(pw, u896_475);
  const password = await window.cryptingDecoder.decrypt(pw2, p567_132);

  // Captcha-Funktion
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
      window.location.href = "downloader.html";
    } else {
      message.textContent = "Ungültige Anmeldedaten oder falsches Captcha.";
      captchaResult = generateCaptcha();
      captchaInput.value = "";
    }
  });
});

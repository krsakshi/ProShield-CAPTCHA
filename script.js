document.addEventListener('DOMContentLoaded', () => {
    const captchaCanvas = document.getElementById('captchaCanvas');
    const captchaInput = document.getElementById('captchaInput');
    const resultMessage = document.getElementById('resultMessage');
    const refreshCaptcha = document.getElementById('refreshCaptcha');
    const captchaForm = document.getElementById('captchaForm');

    function generateCaptchaText(length = 6) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < length; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    function drawCaptcha(text) {
        const ctx = captchaCanvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, captchaCanvas.width, captchaCanvas.height);
        ctx.font = '24px Arial';
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(text, captchaCanvas.width / 2, captchaCanvas.height / 1.5);
    }

    function refreshCaptchaText() {
        const captchaText = generateCaptchaText();
        captchaCanvas.dataset.captcha = captchaText;
        drawCaptcha(captchaText);
    }

    refreshCaptcha.addEventListener('click', refreshCaptchaText);

    captchaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userCaptcha = captchaInput.value;
        const correctCaptcha = captchaCanvas.dataset.captcha;

        if (userCaptcha === correctCaptcha) {
            resultMessage.textContent = 'CAPTCHA verified successfully!';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'CAPTCHA verification failed!';
            resultMessage.style.color = 'red';
        }
    });

    // Initial CAPTCHA draw
    refreshCaptchaText();
});

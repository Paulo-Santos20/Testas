document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribeButton').addEventListener('click', function(event) {
        const emailInput = document.getElementById('email');
        const errorMessage = document.getElementById('error-message');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value)) {
            event.preventDefault();
            errorMessage.style.display = 'inline';
        } else {
            errorMessage.style.display = 'none';
        }
    });
});

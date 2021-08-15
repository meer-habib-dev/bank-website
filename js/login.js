document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('userEmail');
    const mailValue = userEmail.value;
    //get Password
    const userPass = document.getElementById('userPassword');
    const passValue = userPass.value;

    if (mailValue == 'taka@baap.com' && passValue == 'cash') {
        window.location.href = 'bank.html';
    }
});
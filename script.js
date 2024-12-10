const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
const passwordInput = document.getElementById('text');

function createPassword() {
    let password = "";
    const passwordLength = 12; // Desired password length

    // Loop to generate the password
    while (password.length < passwordLength) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordInput.value = password; // Set the generated password in the input field
}

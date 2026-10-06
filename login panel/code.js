const username = "LeNaru"
const paswort = "LEONGHGLOL"

function login(){
    let usernameInput = document.getElementById("username").value;
    let paswortInput = document.getElementById("paswort").value;
    let messageInput = document.getElementById("message");

    if (usernameInput === username && paswortInput === paswort) {
        messageInput.style.color = "Lime";
        message.textContent = "Login erfolgt";
    } else {
        message.style.color = "Red";
        message.textContent = "login fehlgeschlagen";
    }
}
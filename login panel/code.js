// Globale Variablen 
const admin_username = "LeNaru"
const admin_password = "LEONGHGLOL"

function login()
{ 
    let input_username = document.getElementById("username").value;
    let input_passwort = document.getElementById("paswort").value;
    
    // Was auch immer das hier wird :)
    let statusMessage = document.getElementById("message");
    
    // Falls Login-Erfolgreich ist
    if (input_passwort == admin_password && admin_username == input_username) 
    {
        statusMessage.style.color = "Lime";
        statusMessage.textContent = "Login erfolgt";
    } 
    else 
    {
        statusMessage.style.color = "Red";
        statusMessage.textContent = "Login fehlgeschlagen";
    }
}

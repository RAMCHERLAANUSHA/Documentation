document.getElementById('email').addEventListener('input', function () {
    validation_email();
});
document.getElementById('password').addEventListener('input', function () {
    validation_password();
});
document.getElementById('username').addEventListener('input', function () {
    validation_username();
});

function validationForm(){
    validation_email();
    validation_password();
    validation_username();
}
function validation_username(){
    var username = document.getElementById("username").value;
    let lettersOnly = /^[A-Za-z]+$/;
    if (username===""){
        return displayErrorMessage("username","*Username should not Empty");
    }
    if(isFinite(username)){
        return displayErrorMessage("username","*Numbers are not allowed for Username");
    }
    if (lettersOnly.test(username)){
        return displayErrorMessage('username', '');
    }        
    return displayErrorMessage('username','');     
}
function validation_email(){
    var email = document.getElementById("email").value;
    let emailregex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email===""){
        return displayErrorMessage("email","*Email should not be empty");
    }
    if (emailregex.test(email)){
        return displayErrorMessage("email","");
    }
    return displayErrorMessage('email','');
}
function validation_password(){
    var password = document.getElementById("password").value;
    if(password===""){
        return displayErrorMessage("password", "*Password should not Empty");
    }
    if(password.length<8){
        return displayErrorMessage("password", "*Password length must contains atleast 8 charecters");
    }
    if(password.length>16){
        return displayErrorMessage("password", "*Password length should not contain more than 16 charecters");
    }
    if (!/[A-Z]/.test(password)) {            
        return displayErrorMessage('password', '*Password must contain at least one Uppercase letter');
    }
    if (!/[a-z]/.test(password)) {            
        return displayErrorMessage('password', '*Password must contain at least one lowercase letter');
    }
    if (!/\d/.test(password)) {
        return displayErrorMessage('password', '*Password must contain at least one digit');
    }
    if (!/[$@$!%*?&]/.test(password)) {
        return displayErrorMessage('password', '*Password must contain at least one special character ($@$!%*?&)');
    }
    return displayErrorMessage('password', '');
}
let msg
let errorContainer
function displayErrorMessage(elementId, message) { 
    errorContainer = document.createElement('p');
    let errorContainerId = elementId + '-error';
    var existingErrorContainer = document.getElementById(errorContainerId);
    if (existingErrorContainer) {
        existingErrorContainer.remove();
    }
    errorContainer.id = errorContainerId;
    errorContainer.classList.add("error-message")
    errorContainer.innerHTML = message;
    errorContainer.style.margin = 0;
    errorContainer.style.padding = 0;
    errorContainer.style.color = "red";
    msg = message;

    var parentDiv = document.getElementById(elementId).closest('.form-group');
    parentDiv.appendChild(errorContainer);
    if (message === ''){
        errorContainer.style.display = 'none';
    }
}

let errors;
function signUpBtn(displayErrorMessage) {
    errors = msg;
    if (errors === '') {
        alert('Sign Up Successful! Please Login');
        window.location.href = 'jslogin.html';
        document.getElementById('signup').addEventListener('click', signUpBtn);
    }
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    let data3 = { emails: email};
    localStorage.setItem('Inemail', JSON.stringify(data3));
    let data4 = { passwords: password};
    localStorage.setItem('Inpassword', JSON.stringify(data4));
    let data7 = {usernames: username};
    localStorage.setItem('Inusername', JSON.stringify(data7));

}




  
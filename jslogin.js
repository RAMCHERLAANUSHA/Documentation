function loginbtn(){
    let emailid = document.getElementById('email').value
    let loginpassword = document.getElementById('password').value
    let emailData = localStorage.getItem('Inemail');
    let emailsData = JSON.parse(emailData);
    let passwordData = localStorage.getItem('Inpassword');
    let passwordsData = JSON.parse(passwordData);
    let getpassword = passwordsData.passwords
    let getemail = emailsData.emails
  
    if (emailid === getemail && loginpassword === getpassword){
        alert('Login Successfull');
        window.location.href = 'index.html'
        let data6 = { flags: true};
        localStorage.setItem('flagstore', JSON.stringify(data6));
    }else{
        alert('Input Credentials not matched');
        window.location.href = 'jslogin.html'
    }
}

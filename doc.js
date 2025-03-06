let logoutbtn = document.getElementById('logout');
let signupbtn = document.getElementById('signup');
let photo = document.getElementById('profile');
let quiz = document.getElementById('quiz');
let loginbtnnav = document.getElementById('login');

let flagData = localStorage.getItem('flagstore');
let flagsData = flagData ? JSON.parse(flagData) : { flags: false };

if (flagsData && flagsData.flags === true) {
    signupbtn.style.display = "none";
    loginbtnnav.style.display = "none";
    logoutbtn.style.display = "block";
    photo.style.display = "block";
    quiz.style.display = "block";
} else {
    logoutbtn.style.display = "none";
    signupbtn.style.display = "block";
    loginbtnnav.style.display = "block";
    photo.style.display = "none";
    quiz.style.display = "none";
}

function logout() {
    alert('Logout Successful');
    window.location.href = 'main.html';
    let data7 = { flags: false };
    localStorage.setItem('flagstore', JSON.stringify(data7));
    localStorage.setItem('scored', '');
}

let useremailData = localStorage.getItem('Inemail');
let useremailsData = useremailData ? JSON.parse(useremailData) : { emails: 'No email' }; 

let userData = localStorage.getItem('Inusername');
let usersData = userData ? JSON.parse(userData) : { usernames: 'Guest' };

let user = document.getElementById('user');
let useremail = document.getElementById('useremail');
let userscore = document.getElementById('userscore');

let usernameid = usersData?.usernames || 'Guest'; 
let useremailid = useremailsData?.emails || 'No email'; 

user.innerHTML = usernameid;
useremail.innerHTML = useremailid;

let storedData = localStorage.getItem('scored');
if (storedData && storedData !== '') {
    let scoredData = JSON.parse(storedData);
    let scoredmarks = scoredData?.scores || 0; 
    userscore.textContent = `Score : ${scoredmarks}`;
    userscore.style.display = "block";
} else {
    userscore.style.display = "none";
}

let listbtn = document.getElementById('jsmenu');
function listbutton() {
    if (listbtn.style.display === 'none') {
        listbtn.style.display = 'block';
    } else {
        listbtn.style.display = 'none';
    }
    listbtn.style.zIndex = 5;
}
let logoutbtn = document.getElementById('logout');
let signupbtn = document.getElementById('signup');
let photo = document.getElementById('profile')
let quiz = document.getElementById('quiz')


let flagData = localStorage.getItem('flagstore');
let flagsData = JSON.parse(flagData);
let loginbtnnav = document.getElementById('login');
if (flagsData['flags']==true) {
    signupbtn.style.display = "none"
    loginbtnnav.style.display = "none"
    logoutbtn.style.display = "block"
    photo.style.display = "block"
    quiz.style.display = "block"

}
else{
    logoutbtn.style.display = "none"
    signupbtn.style.display = "block"
    loginbtnnav.style.display = "block"
    photo.style.display = "none"
    quiz.style.display = "none"
}

function logout(){
    alert('Logout Successfull');
    window.location.href = 'main.html'
    let data7 = { flags: false};
    localStorage.setItem('flagstore', JSON.stringify(data7));
    let s = ''
    localStorage.setItem('scored',s)
}

let useremailData = localStorage.getItem('Inemail');
let useremailsData = JSON.parse(useremailData);
let userData = localStorage.getItem('Inusername');
let usersData = JSON.parse(userData);


let user = document.getElementById('user');
let useremail = document.getElementById('useremail');
let userscore = document.getElementById('userscore');

let usernameid = usersData.usernames; 
let useremailid = useremailsData.emails;

user.innerHTML = usernameid;
useremail.innerHTML = useremailid;

let storedData = localStorage.getItem('scored');
let scoredData
let scoredmarks
if (storedData!==''){
    scoredData = JSON.parse(storedData);
    scoredmarks = scoredData.scores;
    userscore.textContent = `Score : ${scoredmarks}`;
    userscore.style.display = "block";
    scoredmarks=''
}
else{
    userscore.style.display = "none"; 
}
let listbtn = document.getElementById('jsmenu');
function listbutton(){
    if (listbtn.style.display === 'none') {
        listbtn.style.display = 'block';
      } else {
        listbtn.style.display = 'none';
      }
    listbtn.style.zIndex = 5;
}


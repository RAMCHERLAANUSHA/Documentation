let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
document.getElementById('time').textContent = formattedDate;


let inputText = "";
function inputvalue() {
    let getcertify = document.getElementById('getcertificate')
    let storedData = localStorage.getItem('scored');
    let scoredData = JSON.parse(storedData);
    let namedData = localStorage.getItem('Inusername');
    let nameData = JSON.parse(namedData);
    inputname.innerHTML = nameData.usernames;
    getcertify.style.display = "block";
    let dowload = document.getElementById('DowBtn')
    dowload.style.display = "block"
    let scoredmarks = scoredData.scores;
    if (scoredmarks == 0){
        scoress.innerHTML = '"C"';
    }else if (scoredmarks == 1||scoredmarks ==2||scoredmarks ==3){
        scoress.innerHTML = '"B"';
    }else if (scoredmarks == 4||scoredmarks ==5||scoredmarks ==6){
        scoress.innerHTML = '"B+"';
    }else if (scoredmarks == 7||scoredmarks ==8||scoredmarks ==9){
        scoress.innerHTML = '"A"';
    }else{
        scoress.innerHTML = '"A+"';
    }  
};

function downloadFile(){
   
    elementHTML = document.getElementById("getcertificate");
    elementHTML.style.display = "block"
    html2pdf(elementHTML, {
        margin: 10,
        filename: 'certificate.pdf',
        x:0,
        y:0,
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }).from(elementHTML).save('certificate.pdf');
};
  








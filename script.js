function checkVerificationCode(){
 var code = document.getElementById("code").value;
 var verificationCode = "minionek";
    if(verificationCode === code || "MINIONEK" === code){
        window.location.href = "presents.html";
    }else{
        console.log("Niepoprawny kod");
    }
}

function playAudio(){
    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById("minion").style.display = "block";
}
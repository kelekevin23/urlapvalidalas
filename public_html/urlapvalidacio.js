window.addEventListener("load", init);

function $(nev) {
    return document.querySelectorAll(nev);
}
function ID(nev) {
    return document.getElementById(nev);
}


function init() {
    ID("kuld").addEventListener("click", validalas);
}

function validalas() {
    console.log("Validálunk");
    // hossz legalább 3 karakter legyen
    // van-e benne szám, csak betűk legyenek
    // maximális hossz?
    // nagybetűvel kezdődjön, kisbetűvel folytatódjon
    // esetleg szóköz
    var nevMezo = ID("nev").value;
//    if (nevMezo.length < 3) {
//        $("aside section:nth-child(1) p")[0].innerHTML ="Legalább 3 karakterből álljon a név!<br>";
//        ID("nev").style.border = "2px solid red";
//    } else {
//        ID("nev").style.border = "none";
//    }
    
    var szuro = /[A-Z]{1}[a-z]{2,}/;
    var hiba = "";
    var adat = "";
    var email = ID("email").value;
    var email2 = ID("email2").value;
    var van = false;
    
    var telefonszam = ID("tsz").value;
    var szamok = /[+]{1}[0-9]{11}/;
    
    var http = /[http:\\][a-z]{1,}[.hu]/;
    var weboldal = ID("web").value;
    
    //nev
    if (!szuro.test(nevMezo)) {
        hiba += "Nagybetűvel kezdődjön! és legalább 3 karakterből álljon a név!<br>";
        ID("nev").style.border = "2px solid red";
    } else {
        ID("nev").style.border = "none";
        adat += "Név: "+nevMezo+"<br>";
    }
    
    //@, email
    for (var i = 0; i < email.length; i++) {
        if (email[0] !== "@" && email[i] === "@"){
            van = true;
        }
    }
    if (van === true){
        adat += "Email: "+email+"<br>";
        adat += "Mind a két Email-cím helyes!"+ email +"<br>";
    }else{
        hiba += "Az Email-címben nincsen @!<br>";
        hiba += "Az Email-címek nem egyeznek!<br>";
    }

    
    if (!szamok.test(telefonszam)) {
        hiba += "A telefonszámban nem lehet betű és 11 számjegyűnek kell lennie<br>";
    } else {
        adat += "Telefonszám: "+telefonszam+"<br>";
    }
    
    if (!http.test(weboldal)) {
        hiba += "A weboldal helytelen!<br>";
    }else{
        adat += "Weboldal: "+weboldal+"<br>";
    }
    
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = adat;
    
}


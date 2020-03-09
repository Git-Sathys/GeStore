
var TitreCookie = "Cookies."; // Titre
var DescCookie = "En utilisant ce site, vous acceptez automatiquement l'utilisation des cookies."; // Description
var BouttonCookie = "Compris !"; // Boutton text



function FadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
function FadeOut(elem){
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-999999;';
}

function cookieConsent() {
  if (!getCookie('cookieDismiss')) {
    document.body.innerHTML += '<div class="AccepterCookie" id="AccepterCookie"><div class="TitreCookie"><a>' + TitreCookie + '</a></div><div class="DescCookie"><p>' + DescCookie + '</p></div><div class="BouttonCookie"><a onClick="cookieDismiss();">' + BouttonCookie + '</a></div></div>';
	FadeIn("AccepterCookie");
  }
}

function cookieDismiss() {
  setCookie('cookieDismiss','1',7);
  FadeOut("AccepterCookie");
}

window.onload = function() { cookieConsent(); };

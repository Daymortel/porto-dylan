'use strict'

$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show');
    });
    $('#menu').click(function(){
        $('ul').toggleClass('show');
    });
});

function affichZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
}
function dateEtHeure() {
    const infos = new Date();
    document.getElementById('copy').innerHTML = 'Copyright &copy; ' + affichZero(infos.getFullYear()) + ' by Dylan BABONNEAU. All right reserved.';
    document.getElementById('date').innerHTML = affichZero(infos.getDate()) + '/' + affichZero(infos.getMonth() + 1) + '/' + infos.getFullYear();
    document.getElementById('heure_exacte').innerHTML = affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes())+ ':' + affichZero(infos.getSeconds());
}
setInterval("dateEtHeure()");
var heure = new Date().getHours();

const darkMode = document.getElementById('darkmode');
const moon = document.getElementById('moon');

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

$(document).ready(function(){
    $('#moon').click(function(){
        $('i').toggleClass('ion-ios-sunny');
    });
    $('#moon').click(function(){
        $('i').toggleClass('ion-ios-moon');
    });
});

function toggle_text() {
    const span = document.getElementById("ok");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const title = document.getElementById("title");
    const message = document.getElementById("message");
    if(name.value && (email.value && /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value)) && title.value && message.value){
        span.style.display = "inline";
    }else{
        alert("Certains champs sont manquants !");
    }
  }
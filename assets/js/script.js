'use strict'

// const darkMode = document.getElementById('darkmode');
// const moon = document.getElementById('moon');

// darkMode.addEventListener('change', () => {
//     document.body.classList.toggle('dark');
// });

// $(document).ready(function(){
//     $('#moon').click(function(){
//         $('i').toggleClass('ion-ios-sunny');
//     });
//     $('#moon').click(function(){
//         $('i').toggleClass('ion-ios-moon');
//     });
// });

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
    document.querySelector('#copy').innerHTML = `Copyright &copy; 2020 - ${affichZero(infos.getFullYear())} by Dylan BABONNEAU. All right reserved.`;
    document.querySelector('#date').innerHTML = `${affichZero(infos.getDate())} / ${affichZero(infos.getMonth() + 1)} / ${affichZero(infos.getFullYear())}`;
    document.querySelector('#heure_exacte').innerHTML = `${affichZero(infos.getHours())} : ${affichZero(infos.getMinutes())} : ${affichZero(infos.getSeconds())}`;
}
setInterval('dateEtHeure()');

function toggle_text() {
    const span = document.querySelector("#ok");
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const title = document.querySelector("#title");
    const message = document.querySelector("#message");
    if(name.value && (email.value && /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value)) && title.value && message.value){
        span.style.display = "inline";
    }else{
        alert("Certains champs sont manquants !");
    }
}

let charIndex = 0;
const text = 'Dylan<br>BABONNEAU'; // texte à afficher

function taperTexte() {
  document.querySelector('#typeText').innerHTML = text.substr(0, charIndex); // Obtenir l'endroit où va s'afficher le texte
  charIndex++;
}
setInterval(taperTexte, 100); // interval de temps entre l'affichage de chaque lettre

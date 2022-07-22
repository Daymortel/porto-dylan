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
const heure = new Date().getHours();

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

let charIndex = 0;
const text = 'Dylan<br>BABONNEAU'; // texte à afficher

function taperTexte() {
  document.getElementById('typeText').innerHTML = text.substr(0, charIndex); // Obtenir l'endroit où va s'afficher le texte
  charIndex++;
}
setInterval(taperTexte, 100); // interval de temps entre l'affichage de chaque lettre

// let charIndex1 = 0;
// let charIndex2 = 0;
// let charIndex3 = 0;
// let charIndex4 = 0;
// const text1 = "Qualifications";
// const text2 = "Connaissances";
// const text3 = "Projets";
// const text4 = "Contact";

// function taperTexte1() {
//     document.getElementById('typeText1').innerHTML = text1.substr(0, charIndex1);
//     charIndex1++;
// }
// setInterval(taperTexte1, 100);

// function taperTexte2() {
//     document.getElementById('typeText2').innerHTML = text2.substr(0, charIndex2);
//     charIndex2++;
// }
// setInterval(taperTexte2, 100);

// function taperTexte3() {
//     document.getElementById('typeText3').innerHTML = text3.substr(0, charIndex3);
//     charIndex3++;
// }
// setInterval(taperTexte3, 100);

// function taperTexte4() {
//     document.getElementById('typeText4').innerHTML = text4.substr(0, charIndex4);
//     charIndex4++;
// }
// setInterval(taperTexte4, 100);

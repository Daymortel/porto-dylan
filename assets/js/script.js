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

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
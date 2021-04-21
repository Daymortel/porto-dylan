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

const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const modal4 = document.querySelector('.modal-4');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-modal-1');
const btnCloseModal2 = document.querySelector('.close-modal-2');
const btnCloseModal3 = document.querySelector('.close-modal-3');
const btnCloseModal4 = document.querySelector('.close-modal-4');
const btnOpenModal1 = document.querySelectorAll('.show-modal-1');
const btnOpenModal2 = document.querySelectorAll('.show-modal-2');
const btnOpenModal3 = document.querySelectorAll('.show-modal-3');
const btnOpenModal4 = document.querySelectorAll('.show-modal-4');

for(let i = 0; i < btnOpenModal1.length; i++){
    btnOpenModal1[i].addEventListener('click', function(){

        modal1.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
for(let i = 0; i < btnOpenModal2.length; i++){
    btnOpenModal2[i].addEventListener('click', function(){

        modal2.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
for(let i = 0; i < btnOpenModal3.length; i++){
    btnOpenModal3[i].addEventListener('click', function(){

        modal3.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
for(let i = 0; i < btnOpenModal4.length; i++){
    btnOpenModal4[i].addEventListener('click', function(){

        modal4.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

const closeModal = function(){
    modal1.classList.add('hidden');
    modal2.classList.add('hidden');
    modal3.classList.add('hidden');
    modal4.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal1.addEventListener('click', closeModal);
btnCloseModal2.addEventListener('click', closeModal);
btnCloseModal3.addEventListener('click', closeModal);
btnCloseModal4.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){

    if(e.key === "Escape" && !modal1.classList.contains('hidden') || !modal2.classList.contains('hidden') || !modal3.classList.contains('hidden') || !modal4.classList.contains('hidden')){
        closeModal();
    }
});

const darkMode = document.getElementById('darkmode');

darkMode.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked);
});

function createBinaire(){
    const binaire = document.createElement('div');
    binaire.classList.add('binaire');

    binaire.style.left = Math.random() * 100 + 'vw';

    binaire.innerText = '❄️';

    document.body.appendChild(binaire);
}

setInterval(createBinaire, 300);
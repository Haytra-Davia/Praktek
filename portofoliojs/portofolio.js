const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn');
const iconbiasa = document.querySelector('.icon-biasa');
const iconx = document.querySelector('.icon-x');

function displayMenu(){
    if (menu.classList.contains('tampil')){
        menu.classList.remove('tampil');
    }
    else{
        menu.classList.add('tampil');
    }
}
 let menu = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 
 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }
 window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
 }
 const sr = ScrollReveal ({
    distance:'100px',
    duration:2500,
    delay:400,
    reset:true
 })

//  sr.reveal('navbar',{delay:200, origin:'top'})
 sr.reveal('.heading',{delay:800, origin:'top'})
 sr.reveal('.services-container .box',{delay:600, origin:'top'})
 sr.reveal('.ride-container .box',{delay:600, origin:'left'})
 sr.reveal('.about',{delay:600, origin:'right'})
 sr.reveal('.bawah-box1',{delay:600, origin:'left'})
 sr.reveal('.bawah-box',{delay:600, origin:'bottom'})

//  jam
function updateClock() {
   const now = new Date();
   const hours = now.getHours().toString().padStart(2, '0');
   const minutes = now.getMinutes().toString().padStart(2, '0');
   const seconds = now.getSeconds().toString().padStart(2, '0');
   document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   document.getElementById('date').textContent = now.toLocaleDateString('id-ID', options);
}

setInterval(updateClock, 1000);
updateClock();
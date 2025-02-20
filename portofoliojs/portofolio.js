const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn');
const iconbiasa = document.querySelector('.icon-biasa');
const iconx = document.querySelector('.icon-x');

const bgCanvas = document.getElementById("background");
const bgCtx = bgCanvas.getContext("2d");
bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

const particlesCanvas = document.getElementById("particles");
const ctx = particlesCanvas.getContext("2d");
particlesCanvas.width = window.innerWidth;
particlesCanvas.height = window.innerHeight;

let bgParticles = [];
class BGParticle {
    constructor() {
        this.x = Math.random() * bgCanvas.width;
        this.y = Math.random() * bgCanvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.y += this.speedY;
        if (this.y > bgCanvas.height) {
            this.y = 0;
            this.x = Math.random() * bgCanvas.width;
        }
    }
    draw() {
        bgCtx.fillStyle = "rgb(184, 0, 31)";
        bgCtx.beginPath();
        bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        bgCtx.fill();
    }
}

function initBGParticles() {
    bgParticles = [];
    for (let i = 0; i < 100; i++) {
        bgParticles.push(new BGParticle());
    }
}

function animateBGParticles() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    bgParticles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateBGParticles);
}

initBGParticles();
animateBGParticles();

let particles = [];
class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.alpha = 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.01;
        if (this.alpha <= 0) this.alpha = 0;
    }
    draw() {
        ctx.fillStyle = `rgba(235, 131, 23, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].alpha <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function createParticles(event) {
    for (let i = 0; i < 5; i++) {
        let size = Math.random() * 5 + 2;
        let x = event.x;
        let y = event.y;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        particles.push(new Particle(x, y, size, speedX, speedY));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    handleParticles();
    requestAnimationFrame(animateParticles);
}

window.addEventListener("mousemove", createParticles);
animateParticles();

window.addEventListener("resize", () => {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
    initBGParticles();
});
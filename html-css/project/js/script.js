const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
});

navEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
});

function sendEmail (name, email, subject, message) {
    window.location.href ="mailto:halilibrahimozhanli@gmail.com?subject=" + subject + "&body=" + message + "%0D%0A%0D%0ARegards,%0D%0A" + name + "%0D%0A" + email;
}
const navMobile = document.querySelector ('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

// ANIMOWANY HAMBURGER ORAZ WSUWA SIĘ MOBILNA NAWIGACJA
const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
}

navBtn.addEventListener('click', handleNav);


// ZMIANA DATY
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

// WYWOAŁNIE FUNKCJI ZMIANY DATY
handleCurrentYear();


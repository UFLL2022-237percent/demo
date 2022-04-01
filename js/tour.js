const navMenu = document.getElementById('nav_menu'),
    buttonMenu = document.getElementById('nav_button'),
    closeMenu = document.getElementById('nav_close')

buttonMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.tour-title, .mv, .schedule`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.background_img`, {
    origin: 'left'
})

sr.reveal(`.background_data`, {
    origin: 'right'
})

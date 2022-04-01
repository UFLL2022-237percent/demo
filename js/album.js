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

sr.reveal(`.concept_photo, .tracklist, 
           .preview`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.description_img`, {
    origin: 'left'
})

sr.reveal(`.description_data, .back`, {
    origin: 'right'
})

let swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
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

sr.reveal(`.album`, {
    origin: 'left'
})



let previewContainer = document.querySelector('.album-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.album_container .album').forEach(album =>{
  album.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = album.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});
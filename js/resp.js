burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnavbar')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('vclass-resp');
    navList.classList.toggle('vclass-resp');
    navbar.classList.toggle('h-nav-resp');
})

var typed = new Typed('.text', {
    strings: [
        'Full Stack web development', 
        'Front end Html CSS JavaScript',
        'Backend Python/Django'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });
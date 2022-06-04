const warpper = document.querySelector('.teacher-wrapper');
const mentor = document.querySelector('.mentor-wrapper');
const warpperJs = document.querySelector('.js');
const navbarBtn = document.querySelector('.button-burger')
const navbarWrapper = document.querySelector('.navbar-main')


warpper.addEventListener('click', ()=>{
    warpperJs.classList.add('teacher-js');
});

mentor.addEventListener('click', ()=>{
    warpperJs.classList.remove('teacher-js');
});

navbarBtn.addEventListener('click', () =>{
    navbarWrapper.classList.toggle('changed')
});

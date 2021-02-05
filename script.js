
let icon = document.querySelector('.burger__icon');
let menu = document.querySelector('.burger');


const makeBurgerMenuVisible = icon.addEventListener('click', (e) =>{
    menu.classList.toggle('burger_active');
    icon.classList.toggle('burger__icon_active');
})




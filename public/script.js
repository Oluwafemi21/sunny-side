const ham = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

ham.addEventListener('click', () => {
    if(navUl.classList.contains('hidden')){
        navUl.classList.remove('hidden')
    }else{
        navUl.classList.add('hidden')
    }
});
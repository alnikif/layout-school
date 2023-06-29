document.addEventListener('DOMContentLoaded', function(){
    const bgMenu = document.querySelector('.b-g-menu');
    const iconMenu = bgMenu.querySelector('i');
    const menu = document.querySelector('.menu');
    iconMenu.addEventListener('click', function(){
        menu.classList.toggle('mobileMenu');
        if(this.classList[1] == 'fa-bars'){
            this.classList.remove('fa-bars');
            this.classList.add('fa-times');
            menu.style.display = 'block';
        }else {
            this.classList.remove('fa-times');
            this.classList.add('fa-bars');
            menu.style.display = 'none';
        }
    })
    window.addEventListener('resize', function(){
        if(window.innerWidth > 768){
            menu.classList.remove('mobileMenu');
            menu.style.display = '';
        }
    })
})
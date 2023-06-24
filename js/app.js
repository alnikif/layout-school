document.addEventListener('DOMContentLoaded', function(){
    const bgMenu = document.querySelector('.b-g-menu');
    const iconMenu = bgMenu.querySelector('i');
    const menu = document.querySelector('.menu');
    iconMenu.addEventListener('click', function(){
        if(this.classList[1] == 'fa-bars'){
            this.classList.remove('fa-bars');
            this.classList.add('fa-times');
        }else {
            this.classList.remove('fa-times');
            this.classList.add('fa-bars');
        }
    })
})
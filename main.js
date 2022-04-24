var lastWidth=5000;
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
    /*  //oprava - pri sudych kliknuti na navbar menubtn potom pri zmenseni i=obrazovky se zobrazi menu
    window.matchMedia().onchange(function(){
        if(window.innerWidth < lastWidth && window.innerWidth < 931){
            $('.navbar .menu').removeClass("active");
        }
        lastWidth = innerWidth;
    });
    */
});
$(document).ready(function() {
    $('.btn-green').hover(function (){
        $('.btn').toggleClass('btnActive');
        $('.iconify').toggleClass('iconifyActive');
    });
    $('.burger__icon').click(function(){
        $('.icon').toggleClass('iconActive');
        $('.burger__box').toggleClass('burger__boxActive');
        $('.burger__icon').toggleClass('burger__iconActive');
    });
});
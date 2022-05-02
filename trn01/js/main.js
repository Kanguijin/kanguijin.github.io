//window.addEventListener('DOMcontentLoaded', function (){
//    document.querySelector('.header').style.display = 'none';
//})

$(function () {
    $('.main_slider').slick({
        arrows: false, 
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true,
        dots: true 
    });
})
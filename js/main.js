$(function(){
    $(".owl-carousel").owlCarousel({
        items:2,
        autoplay:false,
        margin:10,
        loop:true,
        dots:true,
        responsive: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
$(".owl-prev").html('<span class="arrow"><i class="fal fa-arrow-left"></i></span>');
$(".owl-next").html('<span class="arrow"><i class="fal fa-arrow-right"></i></span>');


});


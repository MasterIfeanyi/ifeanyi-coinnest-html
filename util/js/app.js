// Reviews
$('#why-carousel').owlCarousel({
    loop:true,
    margin:38,
    dots: true,
    nav: false,
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
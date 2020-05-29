$(document).ready(function() {
    // Owl Carousal
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    // FAQs sectiton hide and show panel
    $('.faqs-one .btns button').on('click', function() {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });
    //Add class scrolled to navbar when scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 10) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });

    $('nav .navbar-toggler').on('click', function() {
        $(this).toggleClass('clicked');
        setTimeout(() => {
            $(this).toggleClass('clicked');
        }, 500);
        $('button .navbar-bars').toggleClass('clicked animate__animated animate__heartBeat');
    });
});
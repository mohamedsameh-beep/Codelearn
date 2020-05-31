$(document).ready(function() {
    'use strict';
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    // Owl Carousal
    let owl = $('.owl-carousel');
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
    let buttonslide = $('.faqs-one .btns button');
    buttonslide.on('click', function() {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });
    // Prevent navbarToggle and navbarInfo when click it, not execute 2 functions together
    let navInfoAndToggle = $('nav .navbar-menu .navbar-info, nav .navbar-toggler-parent');
    navInfoAndToggle.on('click', function(e) {
        if ($('nav .navbar-menu .navbar-overlay:hidden')) {
            e.stopPropagation();
        }
    });
    // When click on body the left navbar being hidden
    let body = $('body, html');
    body.on('click', function() {
        barsClickClosed();
    });
    // When click on navBar toggle execute func
    let navbarBars = $('button .navbar-bars');
    navbarBars.on('click', function() {
        if (navbarBars.hasClass('clicked')) {
            barsClickClosed();
        } else {
            barsClick();
        }
    });
    let navBarbrand = $('nav .navbar-brand.main'),
        navbartogglerParent = $('nav .navbar-toggler-parent'),
        navbarOverlay = $('nav .navbar-menu .navbar-overlay'),
        navbarInfo = $('nav .navbar-menu .navbar-info'),
        cursorClose = 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiPgogIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI4Ljk0MSwzMS43ODZMMC42MTMsNjAuMTE0Yy0wLjc4NywwLjc4Ny0wLjc4NywyLjA2MiwwLDIuODQ5YzAuMzkzLDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OSAgIGMwLjUxNiwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTlsMjguNTQxLTI4LjU0MWwyOC41NDEsMjguNTQxYzAuMzk0LDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OWMwLjUxNSwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTkgICBjMC43ODctMC43ODcsMC43ODctMi4wNjIsMC0yLjg0OUwzNS4wNjQsMzEuNzg2TDYzLjQxLDMuNDM4YzAuNzg3LTAuNzg3LDAuNzg3LTIuMDYyLDAtMi44NDljLTAuNzg3LTAuNzg2LTIuMDYyLTAuNzg2LTIuODQ4LDAgICBMMzIuMDAzLDI5LjE1TDMuNDQxLDAuNTljLTAuNzg3LTAuNzg2LTIuMDYxLTAuNzg2LTIuODQ4LDBjLTAuNzg3LDAuNzg3LTAuNzg3LDIuMDYyLDAsMi44NDlMMjguOTQxLDMxLjc4NnoiLz4KICA8L2c+Cjwvc3ZnPgo=),auto';

    function barsClick() {
        navbarBars.css('pointer-events', 'none');
        setTimeout(() => {
            navbarBars.css('pointer-events', 'auto');
        }, 400);
        navBarbrand.removeClass('closed');
        navbartogglerParent.animate({
            width: '400'
        });
        navbarBars.addClass('clicked animate__animated animate__heartBeat');
        navbarOverlay.fadeIn();
        navbarInfo.css('transform', 'translateX(0px)');
        navbarInfo.css('cursor', 'default');
        body.css('cursor', cursorClose);
    }

    function barsClickClosed() {
        navBarbrand.addClass('closed');
        navbartogglerParent.animate({
            width: '94'
        });
        navbarBars.removeClass('clicked animate__animated animate__heartBeat');
        navbarOverlay.fadeOut();
        navbarInfo.css('transform', 'translateX(-100px)');
        body.css('cursor', 'default');
    }
    // Animation
    AOS.init();
});
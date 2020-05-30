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
    $('nav .navbar-menu .navbar-info, nav .navbar-toggle').on('click', function(e) {
        if ($('nav .navbar-menu .navbar-overlay:hidden')) {
            e.stopPropagation();
        }
    });
    $('body, html').on('click', function() {
        barsClickClosed();
    });
    $('nav .navbar-toggle').on('click', function() {
        if ($('button .navbar-bars').hasClass('clicked')) {
            barsClickClosed();
        } else {
            barsClick();
        }
    });

    function barsClick() {
        $('nav .navbar-brand.main').removeClass('closed');
        $('nav .navbar-toggler-parent').addClass('opend');
        $('button .navbar-bars').addClass('clicked animate__animated animate__heartBeat');
        $('nav .navbar-menu .navbar-overlay').fadeIn();
        $('nav .navbar-menu .navbar-info').css('transform', 'translateX(0px)');
        $('nav .navbar-menu .navbar-info').css('cursor', 'default');
        $("body").css('cursor', 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiPgogIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI4Ljk0MSwzMS43ODZMMC42MTMsNjAuMTE0Yy0wLjc4NywwLjc4Ny0wLjc4NywyLjA2MiwwLDIuODQ5YzAuMzkzLDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OSAgIGMwLjUxNiwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTlsMjguNTQxLTI4LjU0MWwyOC41NDEsMjguNTQxYzAuMzk0LDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OWMwLjUxNSwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTkgICBjMC43ODctMC43ODcsMC43ODctMi4wNjIsMC0yLjg0OUwzNS4wNjQsMzEuNzg2TDYzLjQxLDMuNDM4YzAuNzg3LTAuNzg3LDAuNzg3LTIuMDYyLDAtMi44NDljLTAuNzg3LTAuNzg2LTIuMDYyLTAuNzg2LTIuODQ4LDAgICBMMzIuMDAzLDI5LjE1TDMuNDQxLDAuNTljLTAuNzg3LTAuNzg2LTIuMDYxLTAuNzg2LTIuODQ4LDBjLTAuNzg3LDAuNzg3LTAuNzg3LDIuMDYyLDAsMi44NDlMMjguOTQxLDMxLjc4NnoiLz4KICA8L2c+Cjwvc3ZnPgo=),auto');
    }

    function barsClickClosed() {
        $('nav .navbar-brand.main').addClass('closed');
        $('nav .navbar-toggler-parent').removeClass('opend');
        $('button .navbar-bars').removeClass('clicked animate__animated animate__heartBeat');
        $('nav .navbar-menu .navbar-overlay').fadeOut();
        $('nav .navbar-menu .navbar-info').css('transform', 'translateX(-100px)');
        $('body').css('cursor', 'default');
    }
});
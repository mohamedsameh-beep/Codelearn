jQuery(document).ready(function($) {
    'use strict';

    var ctx = document.getElementById('myChart');
    if (ctx) {

        var stackedBar = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'first',
                    data: [0, 0, 13, 15, 0, 8, 0, 13, 0, 0],
                    showLine: true,
                    backgroundColor: [
                        '',
                        '',
                        '#387DFD',
                        '#00FFDB',
                        '',
                        '#00FFDB',
                        '',
                        '#387DFD',
                        '',
                        '',
                    ],
                }, {
                    label: 'second',
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    showLine: true,
                    data: [0, 10, 0, 11, 0, 17, 0, 7, 0, 0],
                    backgroundColor: [
                        '',
                        '#00FFDB',
                        '',
                        '#FF5A4E',
                        '',
                        '#387DFD',
                        '',
                        '#FF5A4E',
                        '',
                        '',
                    ],
                    borderWidth: 1
                }],
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    axis: 'y',
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.yLabel;
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: '#646464',
                        },
                        gridLines: {
                            color: '#F1F4FB',
                            lineWidth: 2
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 6,
                            max: 18,
                            stepSize: 3,
                            suggestedMin: 0,
                            fontColor: '#646464',
                            suggestedMax: 18,
                            callback: function(label, index, labels) {
                                if (label >= 12) {
                                    if (label >= 10) {
                                        return label + ':00 PM'
                                    } else {
                                        return '0' + label + ':00 PM'
                                    }
                                } else {
                                    if (label >= 10) {
                                        return label + ':00 AM'
                                    } else {
                                        return '0' + label + ':00 AM'
                                    }
                                }
                            }
                        },
                        gridLines: {
                            color: '#F1F4FB',
                            lineWidth: 2,
                        }
                    }]
                }
            }

        });
    }

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    history.replaceState(null, null, ' ');
    var navbarHeight = $('nav.navbar').innerHeight();

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - navbarHeight
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    $('.owl-carousel-homepage-slider1').owlCarousel({
        items: 1,
        margin: 10,
        lazyLoad: true,
        autoplay: true,
        autoHeight: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        mouseDrag: true
    });
    let owl = $('.owl-carousel-homepage-slider2');
    owl.owlCarousel({
        items: 1,
        margin: 10,
        lazyLoad: true,
        smartSpeed: 450,
        autoplay: true,
        autoHeight: true,
        autoplaySpeed: 800,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        loop: false,
        startPosition: 'URLHash',
    });
    owl.on('changed.owl.carousel', function(property) {
        var current = property.item.index;
        window.location.hash = current + 1;
        history.replaceState(null, null, ' ');
    });
    $('a[href*="#faqs"]').click(function(e) {
        var isScrolling,
            scrolltop,
            playOwl;
        e.stopPropagation();
        owl.trigger('stop.owl.autoplay');
        var hash = $(this).data('faqs');
        var elementHash = $('.faqs-one').find('[data-h="' + hash + '"]');
        // Listen for scroll events
        window.addEventListener('scroll', function scrolling(event) {
            // Clear our timeout throughout the scroll
            window.clearTimeout(isScrolling);
            window.clearTimeout(playOwl);
            // Set a timeout to run after scrolling ends
            isScrolling = setTimeout(function() {
                // Run the callback
                owl.trigger('to.owl.carousel', [elementHash.parent().index(), 800]);
                window.removeEventListener("scroll", scrolling);
                playOwl = setTimeout(() => {
                    owl.trigger('play.owl.autoplay');
                }, 1000);
            }, 66);
        }, false);
    });

    // FAQs sectiton hide and show panel
    // FAQs sectiton hide and show panel
    let buttonslide = $('.faqs-one .btns button');
    buttonslide.on('click', function() {
        var faqs = setTimeout(() => {
            $(this).toggleClass('active');
            $(this).next().toggleClass('active');
        }, 100);
        var heightowlcarousel = setTimeout(() => {
            $('.faqs-one .owl-stage-outer.owl-height').height($('.faqs-one .owl-item.active').height());
        }, 350);
        setTimeout(() => {
            window.clearTimeout(heightowlcarousel);
            window.clearTimeout(faqs);
        }, 355);
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
        navbarToggle.addClass('active');
    });
    // When click on navBar toggle execute func
    let navbarBarsParent = $('button.navbar-toggle'),
        navbarToggle = $('nav .navbar-toggle');
    navbarToggle.on('click', function() {
        if (!navbarToggle.hasClass('active')) {
            navbarToggle.addClass('active');
            barsClickClosed();
        } else {
            navbarToggle.removeClass('active');
            barsClick();
        }
    });
    let navBarbrand = $('nav .navbar-brand.main'),
        navbartogglerParent = $('nav .navbar-toggler-parent'),
        navbarOverlay = $('nav .navbar-menu .navbar-overlay'),
        navbarInfo = $('nav .navbar-menu .navbar-info'),
        cursorClose = 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiPgogIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI4Ljk0MSwzMS43ODZMMC42MTMsNjAuMTE0Yy0wLjc4NywwLjc4Ny0wLjc4NywyLjA2MiwwLDIuODQ5YzAuMzkzLDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OSAgIGMwLjUxNiwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTlsMjguNTQxLTI4LjU0MWwyOC41NDEsMjguNTQxYzAuMzk0LDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OWMwLjUxNSwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTkgICBjMC43ODctMC43ODcsMC43ODctMi4wNjIsMC0yLjg0OUwzNS4wNjQsMzEuNzg2TDYzLjQxLDMuNDM4YzAuNzg3LTAuNzg3LDAuNzg3LTIuMDYyLDAtMi44NDljLTAuNzg3LTAuNzg2LTIuMDYyLTAuNzg2LTIuODQ4LDAgICBMMzIuMDAzLDI5LjE1TDMuNDQxLDAuNTljLTAuNzg3LTAuNzg2LTIuMDYxLTAuNzg2LTIuODQ4LDBjLTAuNzg3LDAuNzg3LTAuNzg3LDIuMDYyLDAsMi44NDlMMjguOTQxLDMxLjc4NnoiLz4KICA8L2c+Cjwvc3ZnPgo=),auto';

    function barsClick() {
        navbarBarsParent.css('pointer-events', 'none');
        setTimeout(() => {
            navbarBarsParent.css('pointer-events', 'auto');
        }, 400);
        navBarbrand.removeClass('closed');
        navbartogglerParent.addClass('active');
        navbarOverlay.fadeIn();
        navbarInfo.css('transform', 'translateX(0px)');
        navbarInfo.css('cursor', 'default');
        body.css('cursor', cursorClose);
    }

    function barsClickClosed() {
        navBarbrand.addClass('closed');
        navbartogglerParent.removeClass('active');
        navbarInfo.css('transform', 'translateX(-100px)');
        navbarOverlay.fadeOut();
        body.css('cursor', 'default');
    }

    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches
    $(".next").click(function() {
        if (!$(this).hasClass('last')) {

            if (animating) return false;
            animating = true;

            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();

            //activate next step on progressbar using the index of next_fs
            // $(".progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute'
                    });
                    next_fs.css({ 'left': left, 'opacity': opacity });
                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
            if ($(".progressbar li")) {
                $('fieldset').each(function() {
                    $(this).find(".progressbar li").eq($("fieldset").index(current_fs)).find('span').animate({ width: "100%" }, 1000);
                    setTimeout(() => {
                        $(this).find(".progressbar li").eq($("fieldset").index(current_fs) + 1).addClass('active');
                    }, 1200);
                });
            }
        }
    });
    $(".prev-stage1").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent().parent();
        previous_fs = $(this).parent().parent().prev();

        //de-activate current step on progressbar

        //show the previous fieldset
        previous_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1 - now) * 50) + "%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({ 'left': left });
                previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
                previous_fs.css({ 'position': 'relative' });
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
        if ($(".progressbar li")) {
            $('fieldset').each(function() {
                $(this).find(".progressbar li").eq($("fieldset").index(current_fs) - 1).find('span').animate({ width: "0", }, 1000);
                setTimeout(() => {
                    $(this).find(".progressbar li").eq($("fieldset").index(current_fs)).removeClass('active');
                }, 200);
            });
        }
    });

    $(".submit").click(function() {
        return false;
    });

    function mySubmitFunction(e) {
        e.preventDefault();
        someBug();
        return false;
    }

    function signInCallback(authResult) {
        if (authResult['code']) {

            // Hide the sign-in button now that the user is authorized, for example:
            $('#signinButton').attr('style', 'display: none');

            // Send the code to the server
            $.ajax({
                type: 'POST',
                url: 'http://localhost/kisocial',
                // Always include an `X-Requested-With` header in every AJAX request,
                // to protect against CSRF attacks.
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                contentType: 'application/octet-stream; charset=utf-8',
                success: function(result) {
                    // Handle or verify the server response.
                },
                processData: false,
                data: authResult['code']
            });
            console.log(authResult['code']);

        } else {
            // There was an error.
        }
    }
    $('#signinButton').click(function() {
        // signInCallback defined in step 6.
        auth2.grantOfflineAccess().then(signInCallback);
        // auth2.signIn({ ux_mode: 'redirect' });
    });
    $('.selectbox select').on('change', function() {
        $(this).parent().find('input').attr('placeholder', '+ ' + $(this).find('option:selected').val() + ' Telephone');
    });

});
(function($) {
    'use strict';


     // Navigation hide on scroll on mobile screen
    $(window).on('scroll', function() {
        $('.navbar-collapse').collapse('hide')
    });

    /*---------------------------------------------
     Portfolio Activation
    --------------------------------------------- */
    $('.portfolio-area').imagesLoaded(function() {
        var $grid = $('.portfolioContainer').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
        })

        // Portfolio filtering activation
        $('.protfolio-filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // Filter menu active class addition  
        $('.protfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // LOAD MORE BUTTON FOR PORTFOLIO
        $('.load-more-btn').on('click', function(event) {
            $('.portfolio-item').removeClass('hidden');
            var $grid = $('.portfolioContainer').isotope();
            $(this).hide();
            $('.portfolio-area .load-more').append('<a class="button btn-red-top load-more-btn" href="javascript:void(0)">No More Items</a>')
            event.preventDefault();
        });
    });

    /* ---------------------------------------------
     Main Slider 
    --------------------------------------------- */
    $('.slider-navigation').slick({
        dots: false,
        arrows: true,
        autoPlay: true,
        speed: 500,
        autoPlaySpeed: 3000,
        infinite: true,
        fade: true,
        easing: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /* ---------------------------------------------
     Single Portfolio slider
    --------------------------------------------- */
    $('.portfolio-thumbnail-wrapper').slick({
        autoplay: true,
        speed: 300,
        autoplayspeed: 3000,
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /* ---------------------------------------------
     Testimonial slider
    --------------------------------------------- */
    $('.testimonial-slide').slick({
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } }
        ]
    });

    /* ---------------------------------------------
     Client logo slider
    --------------------------------------------- */
    $('.featured-sponcers-list').slick({
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 50,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } }
        ]
    });

    /* ---------------------------------------------
     Single blog post
    --------------------------------------------- */
    $('.post-thumbnail').slick({
        autoplay: true,
        speed: 300,
        autoplayspeed: 3000,
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    /*------------------------------------------------
     Portfolio section
    -------------------------------------------------- */
    $('.vendorx-gallery').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });

    /*------------------------------------------------
     Video gallery section
    -------------------------------------------------- */
    $('.video-play-icon').magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    /* Counter activation */
    $('.counter').counter();

    /* WOW activation */
    new WOW().init();

    /* Instagram Feed JS activation */
    var userFeed = new Instafeed({
        get: 'user',
        limit: '6',
        userId: '4713066548',
        accessToken: '4713066548.8d3ef49.6942ccf6893b404185d88e24f7d56229',
        template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>'
    });
    userFeed.run();

    /* Video Background  */
    $('#video-slide').YTPlayer({
        fitToBackground: true,
        videoId: 'XeyZIAGmcy0',
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            branding: 0,
            rel: 0,
            autohide: 0,
            start: 0
        }
    });


    /*-------------------------------------------
      Scroll to top button
    ---------------------------------------------*/
    $('body').append('<a id="back-to-top" class="to-top-btn" href="#"><i class="fa fa-angle-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('to-top-show');
                } else {
                    $('#back-to-top').removeClass('to-top-show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1250);
        });
    };

})(jQuery);
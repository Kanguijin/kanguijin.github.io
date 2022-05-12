$(function () {

    /////////////////////////////////////

    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(500);
    });

    $('.main_slider').on('init reInit afterChange', function (e, s, c) {
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        console.log(c, s.slideCount);
        c ? c = c + 1 : c = 1;
        $('.slide_num').text(
            c + ' / ' + s.slideCount
        )
    })

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('#myMovie').YTPlayer({
        videoURL: 'https://youtu.be/18OYMT2qUSY',
        containment: '.youtube',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true
    });

    $('.movie .dec i:nth-of-type(1)').on('click', function () {
        $('.movie video').trigger('play');
    })
    $('.movie .dec i:nth-of-type(2)').on('click', function () {
        $('.movie video').trigger('pause');
    })


    $('.youtube i:nth-of-type(1)').on('click', function () {
        $('#myMovie').YTPPlay();
    })
    $('.youtube i:nth-of-type(2)').on('click', function () {
        $('#myMovie').YTPPause();
    })

    // $(".product_slider").slick({
    //     arrows: false,
    //     slidesToShow: 5,
    //     dots: true,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         }
    //     ]
    // });

    // $(".product i.xi-arrow-left").on("click", function () {
    //     $(".product_slider").slick("slickPrev");
    // });
    // $(".product i.xi-arrow-right").on("click", function () {
    //     $(".product_slider").slick("slickNext");
    // });


    $('.product_slider').slick({
        slidesToShow: 5,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.product_list .s_left').on('click', function () {
        $('.product_slider').slick('slickPrev');
    });

    $('.product_list .s_right').on('click', function () {
        $('.product_slider').slick('slickNext');
    });

    $('.tab_link>li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.footer #link').on('change', function () {
        var lik = $(this).val();
        if (lik) window.open(lik)
    })


    $('.hamburger').on('click', function () {
        $('nav').toggleClass('on');
        $(this).toggleClass('is-active')
    })
    /////////////////////////////////////
});
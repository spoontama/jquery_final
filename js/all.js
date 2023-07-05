$(document).ready(function () {
    // totop
    $('.totop a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 1500);
    });

    // navbar dropdownlist
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('.dropdown').removeClass('active');
        $(this).siblings().slideToggle();
        $(this).parent().siblings().find('.sub-menu').slideUp();
    });
    // lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': false,
        'positionFromTop': 300
      })

    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: "bullets",
            clickable: true, // not working?
        },
    });
     //goTop
     function showBtnCondition() {
        if ($(this).scrollTop() > 250) {
            $('.goTop').fadeIn();
            }else{
                $('.goTop').fadeOut();
            }
        }
    $(window).scroll(showBtnCondition);
    $('.goTop').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500); 
    });
});
$(function(){

    function doBurgerMenu(menu) {
        $('#burger').on('click', function(event) {
            event.preventDefault();
            menu.toggleClass('active');
        });
    }

    function doFixedHeader() {
        let header = $('#header');
        let intro = $('#intro');
        let introHeight;
        let scrollPosition = $(window).scrollTop();
        const indentingStartFixedHeader = 1;

        $(window).on('scroll load resize', function() {
            introHeight = intro.innerHeight();
            scrollPosition = $(this).scrollTop();

            if (scrollPosition > introHeight - indentingStartFixedHeader) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        });
    }

    function doSmoothScroll(menu) {
        const scrollSpeed = 800;

        $('[data-scroll]').on('click', function(event) {
            event.preventDefault();
            let blockId = $(this).data('scroll');
            let blockOffSet = $(blockId).offset().top;
            
            $('html, body').animate({
                scrollTop: blockOffSet
            }, scrollSpeed);

            menu.removeClass('active');
        });
    }

    function doSlider() {
        // https://kenwheeler.github.io/slick/
        const slider = $('#clients-slider'); 

        slider.slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidsToScroll: 1,
            fade: true,
            arrows: false,
            dots: true
        });
    }

    function startScript() {
        const menu = $('#header-menu');

        doBurgerMenu(menu);
        doSmoothScroll(menu);
        doFixedHeader();
        doSlider();
    }

    startScript();

});

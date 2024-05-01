$(document).ready(function() {
    $('nav a[href ^="#"]' ).click(function(){
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top}, 500);
            $('.menu').toggle(500);
            return false
            
        });

        /*мобильное меню*/
        $('.menu_burger').click(function(){
            $('.menu').toggle(500);
        });

    })
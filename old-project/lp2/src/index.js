import './style.less';
import $ from 'jquery';

$(window).ready(function () {
    $(".hamburger").click(function () {

            $('.top_menu ul').toggleClass("show_menu");

    });
    new WOW().init();
    $(window).scroll(function () {
        if($(window).scrollTop() < 100){
            $('.scroll_menu').slideUp();

        }
        else{
            $('.scroll_menu').slideDown();

        }
    });
});
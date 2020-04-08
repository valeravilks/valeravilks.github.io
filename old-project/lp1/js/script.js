$('.menu__open').click(function(){
	mobileMenuShow();
});

$(window).resize(function() {
	mobileMenuClose();
	if($(document).width() > 1200){
		$('.menu__open').hide();
	}
});

$('.menu__close').click(function() {
	mobileMenuClose();
});
function mobileMenuShow(){
	$('.menu__list').addClass('menu__list-mobile');
	$('.menu').addClass('menu-mobile');
	$('.menu__item').addClass('menu__item-mobile');
	$('.menu__link').addClass('menu__link-mobile');
	$('.menu__open').hide();
	$('.menu__close').show();
}

function mobileMenuClose(){
	$('.menu__list').removeClass('menu__list-mobile');
	$('.menu').removeClass('menu-mobile');
	$('.menu__item').removeClass('menu__item-mobile');
	$('.menu__link').removeClass('menu__link-mobile');
	$('.menu__open').show();
	$('.menu__close').hide();
}
$('.technology__carousel').owlCarousel({
    margin:150,
    loop:true,
    autoWidth:true,
    items:4,
	nav: true,
	dots: false,
	autoplay: true,
    autoplayTimeout: 5000,
    navText: [
    	"<div class='owl-custom_prev'>" +
		"<img src='img/owl-prev.png'>" +
		"</div>",
        "<div class='owl-custom_next'>" +
        "<img src='img/owl-prev.png'>" +
        "</div>"
	]
});
$(document).ready(function() {
    $(".portfolio__gal").lightGallery();
});
$('.feedback__gallery').owlCarousel({
    dots: true,
    items:1,
    nav: true,
    loop: true,
    autoWidth: false,
    autoplay: true,
    center: true,
    autoplayTimeout: 5000,
    navText: [
        "<div class='owl-custom_prev'>" +
        "<img src='img/owl-prev.png'>" +
        "</div>",
        "<div class='owl-custom_next'>" +
        "<img src='img/owl-prev.png'>" +
        "</div>"
    ]
});


function scrollToElement(link, duration){
    $(link).click( function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, duration);
    });
}

scrollToElement("a[href = '#header']", 500);
scrollToElement("a[href = '#advantages']", 500);
scrollToElement("a[href = '#portfolio']", 500);
scrollToElement("a[href = '#feedback']", 500);
scrollToElement("a[href = '#price']", 500);
scrollToElement("a[href = '#about']", 500);
scrollToElement("a[href = '#contact']", 500);


function openPopup(){
    $('.popup').fadeIn();
}
function closePopup(){
    $('.popup').fadeOut();
}
$('.close__popup').click(function () {
    closePopup();
});
$('.button-price').click(function(e){
    e.preventDefault();
    openPopup();

});

$('.form-popup .form__button').click(function(e){
    e.preventDefault();
    let name = $('.form-popup .form__name').val();
    let phone = $('.form-popup .form__mail').val();

    $.ajax({
        url: 'php/action.php',
        data: {content: 'Имя: ' + name + '<br> Телефон: ' + phone},
        success: function(data){
            if(data){
                $('.popup__text').text('Заявка успешно отправлена! Мы скоро перезвоним!').css('color', 'green');
                setTimeout(function(){
                    closePopup();
                }, 3000);
            } else {
                $('.popup__text').text('Не удалось отправить заявку! Позвоните нам по телефону: +7-911-690-96-16').css('color', 'red');
                setTimeout(function(){
                    closePopup();
                }, 3000);
            }
        }
    });
});

$('.form-quest .form__button').click(function(e){
    e.preventDefault();
    let name = $('.form-quest .form__name').val();
    let phone = $('.form-quest .form__mail').val();
    let quest = $('.form-quest .form__textarea').val();

    $.ajax({
        url: 'php/action.php',
        data: {content: 'Имя: ' + name + '<br> Телефон: ' + phone + '<br> Вопрос: ' + quest},
        success: function(data){
            if(data){
                $('.form__head').text('Ваш вопрос успешно отправлен!').css('color', 'green');
            }
        }
    });
});


$('.your-class').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  appendArrows: ".arrows",
  prevArrow: '.next_arrows',
  nextArrow: '.prev_arrows',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      }
    },
{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
      }
    },
{
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
  }
  ]
});

$('.page_reviews_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});

$('.sertificat_img').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
    }
  },
{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
    }
  },
{
    breakpoint: 565,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }
}
]
});

$(function(){
  $("#phone_01, #phone_02, #phone_03").mask("+375(99) 999-99-99");
});

////////////////menu////////////////

$(window).scroll(function(){
$('.big_menu').toggleClass('small_menu', $(this).scrollTop() > 50);
});

$(document).ready(function(){
    $('#navigation_burger').click(function(){
        $(this).toggleClass('open');
        $('.mobile_menu').slideToggle();
    });
});


$('.button_write, .study_block_button').click(function(){
    $('.envelope, .black-overlay, body').addClass('active');
});
$('.close-btn, .black-overlay').click(function(){
    $('.envelope, .black-overlay, body').removeClass('active');
});


$('.button_sale').click(function(){
    $('.envelope_sale, .black-overlay, body').addClass('active');
});
$('.close-btn, .black-overlay').click(function(){
    $('.envelope_sale, .black-overlay, body').removeClass('active');
});


$('.button_reviews').click(function(){
    $('.reviews_form_block, .black-overlay, body').addClass('active');
});
$('.close-btn, .black-overlay').click(function(){
    $('.reviews_form_block, .black-overlay, body').removeClass('active');
});


$('.button_erip').click(function(){
    $('.page_erip_footer_form_block, .black-overlay_erip, body').addClass('active');
});
$('.close-btn-erip').click(function(){
    $('.page_erip_footer_form_block, .black-overlay_erip, body').removeClass('active');
});

// $('.page_question_block_button').click(function(){
//     $('.page_question_block_button').click(alert('Ваша заявка отправлена'));
// });



////////////////maps///////////////


ymaps.ready(init);

function init(){

    var myMap,
    myPlacemark1,
    myPlacemark2,
    myPlacemark3;

    myMap = new ymaps.Map("map", {
        center: [52.11169318, 23.70404670],
        zoom: 13
    });

        myPlacemark1 = new ymaps.Placemark([52.095138, 23.730649], {        hintContent: 'Учебный класс',
        balloonContentHeader: "Учебный класс",
        balloonContentBody: ' ул. Пионерская,  85-28'
        });
        myMap.geoObjects.add(myPlacemark1);

        myPlacemark2 = new ymaps.Placemark([52.093283, 23.692883], { hintContent: 'Офис',
        balloonContentHeader: "Офис",
        balloonContentBody: 'ул. Советская, 46-52'
        });
        myMap.geoObjects.add(myPlacemark2);

        myPlacemark3 = new ymaps.Placemark([52.120679, 23.654665], { hintContent: 'Автодром',
        balloonContentHeader: "Автодром",
        balloonContentBody: 'ул. Белорусская, 68'
        });
        myMap.geoObjects.add(myPlacemark3);

        myMap.behaviors.disable('scrollZoom')

}

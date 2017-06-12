let toPrice =  {
  mini : 'Заказ для малого бизнеса до 15 компьютеров',
  middle : 'Заказ для среднегго бизнеса до 100 компьютеров',
  elite : 'Заказ для крупного бизнеса более 100 компьютеров'
};




function onSend (elForm, event) {
  event.preventDefault();
  const elText = elForm.querySelector('.main__text-input');
  const elName = elForm.querySelector('.main__name-input');
  const elEmail = elForm.querySelector('.main__email-input');
  let dataForm = {
      elText : elText.value,
      elName : elName.value,
      elEmail : elEmail.value,
   }
   let jsonData = JSON.stringify(dataForm);
   console.log(jsonData);

   return false;
};
const eForm = document.querySelector('.main__support-form');
eForm.addEventListener('submit', onSend.bind(null, eForm));


//animate іmooth scrolling
$(document).ready(function(){
	$("#header__menu").on("click","a", function (event) {
		event.preventDefault();

		let id  = $(this).attr('href');

		let top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 400);
	});
});

//btton up and down
var BottomPosition = 0;
var BottomFlag = false;
var AnimateFlag = false;

$(document).ready(function() {
    $('.main__top-button').click(function() {
        AnimateFlag = true;
        if(BottomFlag) {
            $("body,html").animate({"scrollTop":BottomPosition}, 400, function() {
                AnimateFlag = false;
            });
        BottomFlag = false;
        $('.main__top-button span').html('Вверх');
        }
        else { // если нажата кнопка GO TO TOP...
            $("body,html").animate({"scrollTop":0}, 400, function() {
                AnimateFlag = false;
            });
            BottomPosition = $(window).scrollTop();
            BottomFlag = true;
            $('.main__top-button span').html('Вниз');
        }
    });



$(window).scroll(function(event) {
    var countScroll = $(window).scrollTop();
    if (countScroll > 400 && !AnimateFlag) {
        $('.main__top-button').show();
        if(BottomFlag) {
            BottomFlag = false;
            $('.main__top-button span').html('Вверх');
        }
    }
    else {
        if(!BottomFlag) {
            $('.main__top-button').hide();
        }
    }
});
});

//script for popups
$(function () {
  $('button.show_popup').click(function () {
     console.log($(this).attr("id"));
	   $('div.'+$(this).attr("id")).fadeIn(500);
	   $("body").append("<div id='overlay'></div>");
	   $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		 return false;
	});
	$('button.close').click(function () {
	   $(this).parent().fadeOut(100);
	   $('#overlay').remove('#overlay');
	   return false;
	});
});

$(document).ready(function() {
  const $popup  = $('.popup');

  $('.price').click( function(event) {
    event.preventDefault();
    $popup.show();
  });
});


$(document).ready(function() {
  const $popup  = $('.popup');

  $('.content-close').click( function(event) {
    event.preventDefault();
    $popup.hide();
    $(".information p").html('Заполните поля для оформления заявки');
    $(".information p").css("background-color", "lightgrey");
  });
});


$(document).ready(function() {
  const $popup  = $('.popup');

  $('.price').click( function(event) {
    let string = $('.price:hover').parent()[0].outerHTML;
    let firstIndex = string.indexOf('<h3>');
    let lastIndex = string.indexOf('</h3>');
    let buyPrice = string.substring(firstIndex+4,lastIndex).toLowerCase();

    event.preventDefault();
    console.log(toPrice[buyPrice]);
    let titleMessage = toPrice[buyPrice];
    ($(".title-price").html(titleMessage));

    $popup.show(600);
  });
});


$(document).ready(function() {

$('ul.main__tabs li').css('cursor', 'pointer');

$('ul.main__tabs.main__tabs-first li').click(function(){
  let thisClass = this.className.slice(0,2);
  console.log(thisClass);
  $('div.t1').hide();
  $('div.t2').hide();
  $('div.' + thisClass).show();
  $('ul.main__tabs.main__tabs-first li').removeClass('tab-current');
  $(this).addClass('tab-current');
  });
});




$(function() {

  $('.content').each(function(){

	let form = $(this),
        btn = form.find('.content-button');


	form.find('.rfield').addClass('empty_field');


    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() != ''){

		$(this).removeClass('empty_field');
        } else {

		$(this).addClass('empty_field');
        }
      });
    }


    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#d8512d'});

      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },500);
    }


    setInterval(function(){

	  checkInput();

      let sizeEmpty = form.find('.empty_field').length;

      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    btn.click(function(event){
      event.preventDefault();
      if($(this).hasClass('disabled')){
		lightEmpty();
        return false
      } else {
        $(".information p").html("<p>Ваше сообщение принято, Ожидайте звонок</p>");

        $(".information p").css("background-color", "yellow");
        $('.content')[0].reset();
      }
    });
  });
});


//clear field and form script field .
$(function() {

  $('.main__support-form').each(function(){

	let form = $(this),
        btn = form.find('.main__button-send');


	form.find('.rfield').addClass('empty_field');


    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() != ''){

		$(this).removeClass('empty_field');
        } else {

		$(this).addClass('empty_field');
        }
      });
    }


    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#d8512d'});

      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },500);
    }


    setInterval(function(){

	  checkInput();

      let sizeEmpty = form.find('.empty_field').length;

      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    btn.click(function(event){
      event.preventDefault();
      if($(this).hasClass('disabled')){
		      lightEmpty();
        return false
      } else {
        $(".main__message").html("<p>Ваше сообщение отправлено</p>");
        $(".main__message").css("color", "black");
        $('.main__support-form')[0].reset();
        setTimeout(function(){$(".main__message").html(" ")},10000);
        }
    });
  });
});

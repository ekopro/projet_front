let toPrice =  {
  mini : 'Заказ для малого бизнеса до 15 компьютеров',
  middle : 'Заказ для малого бизнеса до 100 компьютеров',
  elite : 'Заказ для малого бизнеса более 100 компьютеров'
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


$(document).ready(function(){
	$("#header__menu").on("click","a", function (event) {
		event.preventDefault();

		let id  = $(this).attr('href');

		let top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});
});






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


$(function () {
	//script for popups
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
    $(".information p").html('Ваше сообщение');
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
    ($(".title-price").html(`${toPrice[buyPrice]}`));
    $popup.show();
  });
});


$(document).ready(function() {

$('ul.main__tabs li').css('cursor', 'pointer');

$('ul.main__tabs.main__tabs-first li').click(function(){
  var thisClass = this.className.slice(0,2);
  console.log(thisClass);
  $('div.t1').hide();
  $('div.t2').hide();
  $('div.' + thisClass).show();
  $('ul.main__tabs.main__tabs-first li').removeClass('tab-current');
  $(this).addClass('tab-current');
  });
});


// $(document).ready(function() {
//   const $popup  = $('.popup');
//
//   $('.content-button').click( function(event) {
//     event.preventDefault();
//     $(".information p").html("<p>Ваше сообщение принято, Ожидайте звонок</p>");
//   });
// });


(function( $ ){

$(function() {

  $('.content').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
        btn = form.find('.content-button');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('.rfield').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#d8512d'});
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },500);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
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

    // Событие клика по кнопке отправить
    btn.click(function(event){
      event.preventDefault();
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();
        return false
      } else {
        $(".information p").html("<p>Ваше сообщение принято, Ожидайте звонок</p>");
        // Все хорошо, все заполнено, отправляем форму

        // form.submit();
      }
    });
  });
});

})( jQuery );

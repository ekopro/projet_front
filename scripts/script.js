

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

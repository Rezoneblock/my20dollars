$(document.body).ready(function () {
  


  $('.hero__content__form').validate({
    errorClass: "invalid",
      rules: {
        userPhone: {
          required: true
        }
      },
      // error massages
      messages: {
        userPhone: {
          required: "Заполните поле",
          minlength: "Введите корректный номер"
        }
      },
      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log('Ответ сервера: ' + response);
            $(form)[0].reset();
            return true;
          },
          error: function (responce) {
            console.error('Ошибка ' + responce);
          }
        });
      },
      errorPlacement: function (error, element) {
        if (element.attr("type") == "tel") {
          $('.hero__content__form__invalid').css('opacity', '1');
          return element.next('input').append(error);
        }
        error.insertAfter($(element));
      },
  });

  
})

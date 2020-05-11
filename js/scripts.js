$(document).ready(function(){
  $('.block-slider').slick({
    dots: true,
    arrows: false
  });
});


var slider2 = document.getElementById("myRange2");
var output1 = document.getElementById("sliderValue2");
var slider2 = document.querySelector('.slider-value2');
  
output1.innerHTML = slider2.value;

slider2.oninput = function() {
  output1.innerHTML = this.value;
  slider2.style.cssText = `--val: ${this.value}`;
}
var slider = document.getElementById("myRange1");
var output = document.getElementById("sliderValue1");
var slider = document.querySelector('.slider-value1');
  
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  slider.style.cssText = `--val: ${this.value}`;
}
$(function() {
    addInputs();
      $(document).on('input change', '.slider-point', function()   {
        addInputs()
      })
  });
function addInputs() {
     var $output1 = $('#sliderValue2').text();
      var $output2 = $('#sliderValue1').text();
      $value = $output1 * $output2;
        result = $value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u202f');
        $('#sliderValue3').text(result);
}

$('.language-dropdown .current-language').on('click', function(e){
  if ( $(e.target).closest('.language-dropdown').hasClass('open') ){
    $(e.target).closest('.language-dropdown').removeClass('open');
    $(e.target).closest('.language-dropdown').removeClass('open');
    $('.fa-angle-down').attr('aria-hidden', 'true').show();
    $('.fa-angle-up').attr('aria-hidden', 'false').hide();
    $('.dropdown').hide();
    $('.triangle').hide();
  } else {
    $(e.target).closest('.language-dropdown').addClass('open');
    $('.fa-angle-down').attr('aria-hidden', 'true').hide();
    $('.fa-angle-up').attr('aria-hidden', 'false').show();
    $('.dropdown').show();
    $('.triangle').show();
  }
})


  var username = $('#username');
  var phone = $('#phone');
  var validated = true;
  
  function formValidate() {
      // Прячем ошибки
      username.removeClass('errored');
      phone.removeClass('errored');
      $('#username_error').hide();
      $('#phone_error').hide();
      validated = true;
  
      // Валидация юзернейма
      if (!/^[A-Za-z\s]+$/.test(username.val())) {
          $('#username_error').show();
          username.addClass('errored');
          validated = false;
      }
  
      // Валидация телефона
      if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.val())) {
          $('#phone_error').show();
          phone.addClass('errored');
          validated = false;
      }
  
      if (!validated) {
          return false
      } else {
          return true
      }
  }
  
  //Проверка формы и отправка
  $('#contact-form').on('submit', function (e) {
      e.preventDefault()
      if (formValidate()) {
          $("#contact-form :input").prop("disabled", true);
          $("#contact-form .form__item :input").css({
              opacity: 0.5
          });
          $("#contact-form .dropdown span").css({
              opacity: 0.5
          });
          $('.item-title__label').css({
              opacity: 0.5
          });
          $('.submit-text').hide();
          $('.fa-spinner').css({
              display: 'inline-block'
          });
          setTimeout(function () {
              $('#contact-form').hide();
              $('.answer').show()
          }, 1500)
      }
  })
  
  //Great
  $('.btn__answer').on('click', function () {
      location.reload();
  })
  
  
  //Код для custom select
  $('select.dropdown').each(function () {
      var dropdown = $('<div />').addClass('dropdown selectDropdown');
      $(this).wrap(dropdown);
  
      var label = $('<span />').text($(this).attr('placeholder')).insertAfter($(this));
      var list = $('<ul />');
  
      $(this).find('option').each(function () {
          list.append($('<li />').append($('<a />').text($(this).text())));
      });
      list.insertAfter($(this));
  
      if ($(this).find('option:selected').length) {
          label.text($(this).find('option:selected').text());
          list.find('li:contains(' + $(this).find('option:selected').text() + ')').addClass('active');
          $(this).parent().addClass('filled');
      }
  
  });
  
  $(document).on('click touch', '.selectDropdown ul li a', function (e) {
      e.preventDefault();
      var dropdown = $(this).parent().parent().parent();
      var active = $(this).parent().hasClass('active');
      var label = active ? dropdown.find('select').attr('placeholder') : $(this).text();
  
      dropdown.find('option').prop('selected', false);
      dropdown.find('ul li').removeClass('active');
  
      dropdown.toggleClass('filled', !active);
      dropdown.children('span').text(label);
  
      if (!active) {
          dropdown.find('option:contains(' + $(this).text() + ')').prop('selected', true);
          $(this).parent().addClass('active');
      }
  
      dropdown.removeClass('open');
  });
  
  $('.dropdown > span').on('click touch', function (e) {
      var self = $(this).parent();
      self.toggleClass('open');
  });
  
  $(document).on('click touch', function (e) {
      var dropdown = $('.dropdown');
      if (dropdown !== e.target && !dropdown.has(e.target).length) {
          dropdown.removeClass('open');
      }
  });
// phone pligin
$("#mobile-number").intlTelInput();
//File input
$('input[type="file"]').each(function() {
  var label = $(this).parents('.form-group').find('label').text();
  label = (label) ? label : 'Upload File';
  $(this).wrap('<div class="input-file"></div>');
  $(this).before('<span class="btn"><i class="fa fa-paperclip"></i>'+label+'</span>');
  $(this).before('<span class="file-selected"></span>');
  $(this).change(function(e){
      var val = $(this).val();
      var filename = val.replace(/^.*[\\\/]/, '');
      $(this).siblings('.file-selected').text(filename);
  });
});
$('.input-file .btn').click(function() {
  $(this).siblings('input[type="file"]').trigger('click');
});
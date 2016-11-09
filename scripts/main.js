$( document ).ready(function() {
  $('.section').find('li').hide();
    $('.section').on('click',function(){
      $(this).find('li').slideUp();
      $(this).find('li').toggle();
    });







});

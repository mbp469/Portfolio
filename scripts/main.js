$( document ).ready(function() {

    $('.section').on('click',function(event){
      $('.section').hide();
      var target = $(event.target);
      $(target).toggleClass('open').show();
      if($(target).hasClass('open')){
        var context = {title: "My New Post", address: "github.org", body: "This is my first post!"};
        var html = makeTemplate(context,'#projects-template');
        $(target).children('.content').append(html);
        $('.section').css('width','100%');

     } else {
         $(target).children('.content').empty();
         $('.section').css('width','32.25%');
         $('.section').show();
     }
    });

function makeTemplate(context,target){
  var source   = $(target).html();
  var template = Handlebars.compile(source);
  return template(context);

}

// target.children().toggle();



});

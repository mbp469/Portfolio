$( document ).ready(function() {
  var contextProjects = {
    projects:
    [
      {title: "Hatchery-App", address: "https://github.com/mbp469/Hatchery-App", body: "an app that can store egg orders and display the current weather conditions. the egg inventory and users are stored in a rails backend. this was a collaborative project in which i designed the views for the order and admin pages."},
      {title: "memory_game", address: "https://github.com/mbp469/memory_game", body: "an app to play the classic card game. collects scores and displays on a leaderboard. utilizes a rails back-end to store user data. a collaborative project in which i designed the leaderboard and user info page."},
      {title: "Shopular", address: "https://github.com/mbp469/Shopular", body: "an app that uses local storage to manage an inventory. a first attempt at using AngularJS"},
      {title: "AngularToDos", address: "https://github.com/mbp469/AngularToDos", body: "an app that uses local storage to manage a ToDo List. another project using AngularJS"},
      {title: "Jeopardy", address: "https://github.com/mbp469/Jeopardy", body: "an app that uses a Jeopardy API to play game. You can see the correct answers displayed in the console."}
    ]
  };
  var contextEducation = {
    schools:
    [
      {title: "The Iron Yard, Durham, NC", degree: "front-end engineering", date: "2016"},
      {title: "Salem International University, Salem, WV", degree: "molecular biology & biotechnology", date: "2000 - 2004"},
    ]
  };
  var contextExperience = {
    jobs:
    [
      {title: "assistant manager", organization: "Paws4ever", address: "http://paws4ever.org", date: "2014 - 2016"},
      {title: "research associate", organization: "Allylix (now Evolva)", address: "http://www.evolva.com", date: "2008, 2013 - 2014"},
      {title: "research technician", organization: "UNC-Chapel Hill, CFAR", address: "http://unccfar.org", date: "2011 - 2013"},
      {title: "research assistant", organization: "UT-Austin, Vokes Lab", address: "http://www.sbs.utexas.edu/vokes_lab/index.html", date: "2008 - 2011"},
      {title: "molecular diagnostic technician", organization: "LDDC (now UKVDC)", address: "http://vdl.uky.edu/Home.aspx", date: "2007 - 2008"},
      {title: "research assistant", organization: "Case Western, CMM", address: "http://casemed.case.edu/dept/dermatology/Centers/CMM.html", date: "2005 - 2007"}
    ]
  };

    $('.section').on('click',function(event){
      var target = $(this);
      console.log(target);
      $(target).toggleClass('open');
      if($(target).hasClass('open')){
        $('.section').hide();
        $(target).show();
        var html = getTemplate(target);

        $(target).children('.content').append(html);
        $('.section').css('width','100%').css('height','100%');

        // $('body').off();
     } else {
       $('.sections').find('.section').css('width','32.25%').css('height','32.25%').show().find('.content').empty();
     }
    });

function getTemplate(clickedElement){
  var context;
  var hTemplate;
  if (clickedElement.hasClass('projects')){
    context = contextProjects;
    hTemplate = "#projects-template";
  }
  if (clickedElement.hasClass('education')){
    context = contextEducation;
    hTemplate = "#education-template";

  }
  if (clickedElement.hasClass('experience')){
    context = contextExperience;
    hTemplate = "#experience-template";

  }
  return makeTemplate(context, hTemplate);
}

function makeTemplate(context,hTemplate){
  var source   = $(hTemplate).html();
  var template = Handlebars.compile(source);
  return template(context);

}

// target.children().toggle();



});

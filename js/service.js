$(document).ready(function(){

  $(".title").click(function(){
    $(this).siblings(".title").removeClass("act");
    $(this).toggleClass("act");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

});
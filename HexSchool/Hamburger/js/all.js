$(document).ready(function(event){
    $(".top a").click(function(event) {
        event.preventDefault();
        $("html,body").animate({
          scrollTop: 0
        }, 700);
      });
    $(".header-wrap .icon-nav").click(function(event){
      event.preventDefault();
      $(this).parent().parent().parent().parent().find(".cart .menu ul").slideUp();
      $(".header-wrap .nav").slideToggle();
    });
    $(".cart .menu .icon-menu").click(function(event){
      event.preventDefault();
      $(this).parent().parent().parent().parent().parent().find("header .header-wrap ul").slideUp();
      $(".cart .menu ul").slideToggle();
    });
    $(".heart").click(function(event){
      $(this).find(".solid-heart").toggleClass("like");
    });
});
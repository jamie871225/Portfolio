$(document).ready(function(event){
    $(".top a").click(function (event) {
        event.preventDefault();
        $("html,body").animate({
          scrollTop: 0
        }, 700);
      });
});
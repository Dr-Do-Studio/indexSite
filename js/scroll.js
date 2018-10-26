$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".d-header").css("background", "black");
    } else {
      opacity = scroll / 200;

      backgroundopacity = "rgba(0, 0, 0, " + opacity + ")";
      $(".d-header").css({
        "background-color": backgroundopacity
      });
    }
  });
});

$(".scroll-indicator").click(function() {
  var href = $(this).attr("href");
  var pos = $(href).offset().top;
  $("html,body").animate({ scrollTop: pos }, 1000);
  return false;
});

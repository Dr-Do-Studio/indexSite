$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".d-header").css("background", "black");
      $(".d-header").css("border-bottom", "2px solid yellow");
    } else {
      $(".d-header").css("background", "none");
      $(".d-header").css("border-bottom", "none");
    }
  });
});

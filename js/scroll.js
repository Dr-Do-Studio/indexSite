$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".d-header-background").css("background-color", "rgba(0, 0, 0, 0)");
      $(".d-header-background").css("border-bottom", "none");
      $(".d-header").css("background", "black");
    } else {
      $(".d-header-background").css("background", "black");
      $(".d-header-background").css("opacity", scroll / 200);
      $(".d-header").css("background-color", "rgba(0, 0, 0, 0)");
      $(".d-header").css("border-bottom", "none");
    }
  });
});

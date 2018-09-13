/*var FollowX = 0,
  FollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 30;
function moveBG() {
  x += (FollowX - (1 / 4) * x) * friction;
  y += (FollowY - y) * friction;

  translate = "translate(" + x + "px, " + y + "px)";

  $(".d-home").css({
    "-webkit-transform": translate,
    "-moz-transform": translate,
    transform: translate
  });

  window.requestAnimationFrame(moveBG);
}

$(window).on("mousemove click", function(e) {
  var MouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var MouseY = Math.max(
    -100,
    Math.min(100, $(window).height() / 2 - e.clientY)
  );
  FollowX = (20 * MouseX) / 100;
  Followy = (20 * MouseY) / 100;
});

moveBG();
*/

$(document).scroll(function() {
  var scroll_p = $(this).scrollTop();
  $(".d-home").css({
    "background-position-y": -scroll_p
  });
  $(".sub-container").css({
    top: -scroll_p / 5,
    bottom: scroll_p / 5
  });
});

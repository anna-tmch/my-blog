$(document).ready(function () {
  setTimeout(function () {
    $("#js-preloader").fadeOut();
  }, 700);

  $(".toggle-menu").click(function () {
    $(this).toggleClass("on");
    $(".menu-wrapper").slideToggle();
    return false;
  });
});

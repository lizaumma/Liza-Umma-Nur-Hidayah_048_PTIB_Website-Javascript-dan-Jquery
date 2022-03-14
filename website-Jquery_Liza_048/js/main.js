$(function () {
  $(document).scroll(function () {
    var $nav = $('.navbar');
    if ($(this).scrollTop() > $nav.height()) {
      $nav.addClass('scrolled');
      $nav.removeClass('navbar-dark');
      $nav.addClass('navbar-light');
      $nav.removeClass('bg-primary');
      $nav.addClass('bg-light');
    } else {
      $nav.removeClass('scrolled');
      $nav.addClass('navbar-dark');
      $nav.removeClass('navbar-light');
      $nav.addClass('bg-primary');
      $nav.removeClass('bg-light');
    }
  });
});

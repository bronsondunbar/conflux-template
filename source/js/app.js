
// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/bootstrap.js'
// @codekit-prepend 'lib/typed.js'

$(document).ready(function () {

  $(".navbar-toggle").click(function (event) {
    var navbarContent = $(".navbar-content").css("width");

    if (navbarContent === "350px") {

      $(".navbar-content > div").fadeOut(300, function () {
        $(".navbar-content").animate({
          width : "0"
        }, 300);
      });

    } else if (navbarContent === "0px") {

      $(".navbar-content").animate({
        "width" : "350px"
      }, 300, function () {
        $(".navbar-content > div").delay(500).fadeIn(300);
      });

    };
    
  });

  $(".navbar-content-close-btn").click(function (event) {

    $(".navbar-content > div").fadeOut(300, function () {
      $(".navbar-content").animate({
        width : "0"
      }, 300);
    });

  });

  $(".panel-heading").click(function (event) {
    $(".panel-heading").removeClass("open");
    $(this).addClass("open");
  });
});

/* Animate text heading using Typed JS */

$(document).ready(function () {

    var currentPage = window.location.href;

    if (currentPage.indexOf("article") == -1) {

        var options = {
          strings: ["creative.^1000", "bold.^1000", "confident.^1000"],
          typeSpeed: 40,
          backSpeed: 40,
          cursorChar: '|',
          loop: true
        }

        var typed = new Typed(".tagline", options);

    }

});


/* Animate text using Typed JS */

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

  };

});
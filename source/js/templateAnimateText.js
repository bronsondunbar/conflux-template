
/* Animate text using Typed JS */

$(document).ready(function () {

  var currentPage = window.location.href;

  if (currentPage.indexOf("article") == -1) {

    var options = {
      strings: ["Quisque.^1000", "Scelerisque.^1000", "Fringilla.^1000"],
      typeSpeed: 40,
      backSpeed: 40,
      cursorChar: '|',
      loop: true
    }

    var typed = new Typed(".tagline", options);

  };

});
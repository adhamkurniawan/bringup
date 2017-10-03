document.addEventListener('DOMContentLoaded', function() {
  var $navBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navBurgers.length > 0) {
    $navBurgers.forEach(function($el) {
      $el.addEventListener('click', function() {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

$(document).ready(function() {
});

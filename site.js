// Highlights the axis tick for whichever section is currently in view.
// Everything else on the site works without JavaScript.

(function () {
  var bands = document.querySelectorAll('.band');
  if (!bands.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle('is-current', entry.isIntersecting);
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  bands.forEach(function (band) { observer.observe(band); });
})();

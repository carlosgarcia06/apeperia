window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var btnScrollToTop = document.getElementById('btnScrollToTop');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.style.display = 'block';
  } else {
    btnScrollToTop.style.display = 'none';
  }
}

function scrollToTop() {
  var currentPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 8);
  }
}

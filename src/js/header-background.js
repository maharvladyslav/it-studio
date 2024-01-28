document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("main-header");

  window.onscroll = function () {
    // Перевірка розміру екрану

    // Перевірка, чи користувач прокрутив сторінку
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("main-header");

  window.onscroll = function () {
    // Перевірка розміру екрану
    if (window.innerWidth > 586) {
      // Перевірка, чи користувач прокрутив сторінку
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    } else {
      // Якщо розмір екрану менше або рівний 586px, видаляємо клас "scrolled"
      header.classList.remove("scrolled");
    }
  };
});

// document.addEventListener("DOMContentLoaded", function () {
//   var top = document.getElementById("to-top");

//   window.onscroll = function () {
//     // Перевірка розміру екрану
//     if (window.innerWidth > 586) {
//       // Перевірка, чи користувач прокрутив сторінку
//       if (
//         document.body.scrollTop > 70 ||
//         document.documentElement.scrollTop > 70
//       ) {
//         top.classList.add("scrolled");
//       } else {
//         top.classList.remove("scrolled");
//       }
//     } else {
//       // Якщо розмір екрану менше або рівний 586px, видаляємо клас "scrolled"
//       top.classList.remove("scrolled");
//     }
//   };
// });

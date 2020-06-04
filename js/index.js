$(document).ready(function () {
  // Prevent image downloads
  $("img").mousedown(function (e) {
    e.preventDefault();
  });

  $("body").on("contextmenu", function (e) {
    return false;
  });

  // Fade in title
  $(".hero-title").delay(200).animate({ opacity: 1, top: 0 }, 800);

  // Fade in navbar
  $(".navbar").delay(800).animate({ opacity: 1 }, 700);

  // Color the navbar on scroll
  $(document).scroll(function () {
    const viewHeight = $(window).height();
    const scrollTop = $(window).scrollTop();
    if (scrollTop > viewHeight - 20) {
      $(".navbar").addClass("scrolled-navbar shadow");
      $(".main-link").addClass("scrolled-nav-link");
    } else {
      $(".navbar").removeClass("scrolled-navbar shadow");
      $(".main-link").removeClass("scrolled-nav-link");
    }
  });

  // Specs button contextual text change
  const specsBtn = $(".specs-btn");
  specsBtn.on("click", function () {
    const isExpanded = specsBtn.attr("aria-expanded");
    if (isExpanded === "false") {
      specsBtn.text("Hide full spec list");
    } else {
      specsBtn.text("Show full spec list");
    }
  });
});

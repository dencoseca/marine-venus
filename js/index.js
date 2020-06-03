$(document).ready(function () {
  // Fade in title
  $(".hero-title").delay(200).animate({ opacity: 1, top: 0 }, 800);

  // Fade in navbar
  $(".navbar").delay(800).animate({ opacity: 1 }, 700);

  // Color the navbar on scroll
  $(document).scroll(function () {
    const navbar = $(".navbar");
    const viewHeight = $(window).height();
    const scrollTop = $(window).scrollTop();
    if (scrollTop > viewHeight - 20) {
      navbar.addClass("colored");
    } else {
      navbar.removeClass("colored");
    }
  });

  // Specs button contextual text change
  const specsBtn = $(".specs-btn");
  specsBtn.on("click", function () {
    const isExpanded = specsBtn.attr("aria-expanded");
    if (isExpanded === "false") {
      specsBtn.text("Hide full specs");
    } else {
      specsBtn.text("Show full specs");
    }
  });
});

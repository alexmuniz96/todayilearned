function initScroll() {
  const menu = document.querySelectorAll(" [data-menu='suave'] [href^='#']");

  function scrollTo(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  menu.forEach((el) => {
    el.addEventListener("click", scrollTo);
  });
}
initScroll();

function initAnimate() {
  const section = document.querySelectorAll("[data-anime='scroll']");
  if (section.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animaScroll() {
      section.forEach((el) => {
        const topDistance = el.getBoundingClientRect().top;
        const isSectionVisible = topDistance - windowHalf < 0;
        if (isSectionVisible) {
          el.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimate();
